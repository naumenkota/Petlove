import s from "./AddPetForm.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadToCloudinary } from "../../utils/uploadCloudinary.js";
import { useDispatch, useSelector } from "react-redux";
import { AddPetSchema } from "../../utils/AddPetSchema.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPet } from "../../redux/api/api.js";
import UploadIcon from "../../assets/icons/upload-cloud.svg?react";
import FootprintIcon from "../../assets/icons/footprint.svg?react";
import { getSpeciesOption } from "../../redux/api/api";
import MaleIcon from "../../assets/icons/male.svg?react";
import FemaleIcon from "../../assets/icons/female.svg?react";
import MultipleIcon from "../../assets/icons/healthicons.svg?react";

export default function AddPetForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { speciesOption, isLoading, errorMessage } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(getSpeciesOption());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(AddPetSchema),
  });

  const imgUrl = watch("imgUrl");
  if (imgUrl && /^https?:\/\//.test(imgUrl)) {
    if (preview !== imgUrl) setPreview(imgUrl);
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      toast.loading("Uploading image...");

      const uploadedUrl = await uploadToCloudinary(file);

      toast.dismiss();
      toast.success("Image uploaded!");

      setValue("imgUrl", uploadedUrl);
      setPreview(uploadedUrl);
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to upload image");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        title: data.title.trim(),
        name: data.name.trim(),
        imgUrl: data.imgUrl.trim(),
        species: data.species.trim(),
        birthday: data.birthday.trim(),
        sex: data.sex,
      };

      const resultAction = await dispatch(addPet(payload));

      if (addPet.fulfilled.match(resultAction)) {
        toast.success("Pet successfully added!");
        navigate("/profile");
      } else {
        toast.error(resultAction.payload || "Failed to add pet");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>
        Add my pet / <span className={s.span}>Personal details</span>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.radioGroup}>
          <label>
            <input type="radio" value="female" {...register("sex")} />
            <button className={s.btn_female}>
              <FemaleIcon />
            </button>
          </label>
          <label>
            <input type="radio" value="male" {...register("sex")} />

            <button className={s.btn_male}>
              <MaleIcon />
            </button>
          </label>
          <label>
            <input type="radio" value="multiple" {...register("sex")} />
            <button className={s.btn_multi}>
              <MultipleIcon />
            </button>
          </label>
          <ErrorMessage message={errors.sex?.message} />
        </div>

        <div className={s.avatarPreview}>
          {preview ? (
            <img src={preview} alt="Photo preview" className={s.previewImg} />
          ) : (
            <div className={s.footprint}>
              <FootprintIcon />
            </div>
          )}
        </div>

        <div className={s.avatarInputGroup}>
          <input
            {...register("avatar")}
            placeholder="https://example.com/avatar.jpg"
            className={s.input_avatar}
          />

          <button
            type="button"
            className={s.uploadBtn}
            onClick={() => document.getElementById("fileInput").click()}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload photo"}
            <UploadIcon />
          </button>

          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <ErrorMessage message={errors.imgUrl?.message} />
        </div>

        <div className={s.inputWrapper}>
          <input
            {...register("title")}
            placeholder="Title"
            className={s.input}
          />
          <ErrorMessage message={errors.title?.message} />
        </div>
        <div className={s.inputWrapper}>
          <input
            {...register("name")}
            placeholder="Pet's Name"
            className={s.input}
          />
          <ErrorMessage message={errors.name?.message} />
        </div>

        <div className={s.inputWrapper}>
          <input
            {...register("birthday")}
            placeholder="Pet's Name"
            className={s.input}
          />
          <ErrorMessage message={errors.birthday?.message} />
        </div>

        <div className={s.inputWrapper}>
          <select {...register("species")} className={s.select} defaultValue="">
            <option value="" disabled hidden>
              Type of pet
            </option>
            {speciesOption.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ErrorMessage message={errors.species?.message} />
        </div>

        <div className={s.btn_wrapper}>
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className={s.btn_back}
          >
            Back
          </button>
          <button type="submit" className={s.btn_submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
