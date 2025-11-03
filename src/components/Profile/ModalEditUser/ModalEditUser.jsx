import s from "./ModalEditUser.module.css";
import { ModalEditUserSchema } from "../../../utils/ModalEditUserSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../ErrorMessage/ErrorMessage.jsx";
import toast from "react-hot-toast";
import CloseIcon from "../../../assets/icons/close.svg?react";
import UploadIcon from "../../../assets/icons/upload-cloud.svg?react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/api/api.js";
import { useSelector } from "react-redux";
import authSelectors from "../../../redux/auth/authSelectors";
import { useEffect, useState } from "react";
import { uploadToCloudinary } from "../../../utils/uploadCloudinary.js";

export default function ModalEditUser({ onClose }) {
  const dispatch = useDispatch();

  const [preview, setPreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const name = useSelector(authSelectors.selectName);
  const email = useSelector(authSelectors.selectEmail);
  const avatar = useSelector(authSelectors.selectUserAvatar);
  const phone = useSelector(authSelectors.selectPhone);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(ModalEditUserSchema),
  });

  useEffect(() => {
    reset({ avatar, name, email, phone });
    setPreview(avatar || "");
  }, [avatar, name, email, phone, reset]);

  useEffect(() => {
    const url = watch("avatar");
    if (url && /^https?:\/\//.test(url)) {
      setPreview(url);
    } else {
      setPreview(avatar || "");
    }
  }, [watch("avatar"), avatar]);

  const hasError = errors.email || errors.name || errors.avatar || errors.phone;

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      toast.loading("Uploading image...");

      const uploadedUrl = await uploadToCloudinary(file);

      toast.dismiss();
      toast.success("Image uploaded!");

      setValue("avatar", uploadedUrl);
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
        name: data.name?.trim(),
        email: data.email?.trim(),
        phone: data.phone?.trim(),
        avatar: data.avatar?.trim() || "",
      };
      await dispatch(updateUser(payload)).unwrap();
      toast.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      toast.error(error || "Failed to update profile");
    }
  };

  return (
    <div className={s.wrapper}>
      <button onClick={onClose} className={s.close_btn}>
        <CloseIcon />
      </button>

      <p className={s.title}>Edit information</p>

      <div className={s.avatarPreview}>
        {preview ? (
          <img src={preview} alt="Avatar preview" className={s.previewImg} />
        ) : (
          <div className={s.placeholder}>No avatar</div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${s.inputGroup} ${hasError && s.inputGroupWithError}`}>
          <div className={s.avatarInputGroup}>
            <input
              {...register("avatar")}
              placeholder="https://example.com/avatar.jpg"
              className={s.input_avatar}
            />

            <button
              type="button"
              className={s.uploadBtn}
              onClick={() => document.getElementById("avatarFile").click()}
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload photo"}
              <UploadIcon />
            </button>

            <input
              type="file"
              id="avatarFile"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            <ErrorMessage message={errors.avatar?.message} />
          </div>
          <div className={s.inputWrapper}>
            <input
              {...register("name")}
              placeholder="Name"
              className={s.input}
            />
            <ErrorMessage message={errors.name?.message} />
          </div>
          <div className={s.inputWrapper}>
            <input
              {...register("email")}
              placeholder="Email"
              className={s.input}
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
          <div className={s.inputWrapper}>
            <input
              {...register("phone")}
              placeholder="+380"
              className={s.input}
            />
            <ErrorMessage message={errors.phone?.message} />
          </div>
        </div>
        <button type="submit" className={s.btn}>
          Go to profile
        </button>
      </form>
    </div>
  );
}
