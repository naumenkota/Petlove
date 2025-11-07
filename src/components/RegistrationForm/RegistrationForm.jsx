import s from "./RegistrationForm.module.css";
import { RegistrationFormSchema } from "../../utils/RegistrationFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PasswordToggle from "../PasswordToggle/PasswordToggle";
import { useState } from "react";
import Title from "../Title/Title.jsx";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/api/api.js";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegistrationFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const userData = { ...data };
      delete userData.confirmPassword;
      await dispatch(registration(userData)).unwrap();
      toast.success("Registration successful!");
      navigate("/home");
    } catch (error) {
      toast.error(error);
    }
  };

  const hasError = errors.email || errors.password || errors.name;

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_title}>
        <Title>Registration</Title>
        <p className={s.text}>Thank you for your interest in our platform.</p>
      </div>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${s.inputGroup} ${hasError && s.inputGroupWithError}`}>
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
              {...register("password")}
              placeholder="Password"
              className={s.input}
              type={showPassword ? "text" : "password"}
            />
            <PasswordToggle
              show={showPassword}
              toggle={() => setShowPassword((prev) => !prev)}
            />
            <ErrorMessage message={errors.password?.message} />
          </div>
          <div className={s.inputWrapper}>
            <input
              {...register("confirmPassword")}
              placeholder="Confirm password"
              className={s.input}
              type={showConfirmPassword ? "text" : "password"}
            />
            <PasswordToggle
              show={showConfirmPassword}
              toggle={() => setShowConfirmPassword((prev) => !prev)}
            />
            <ErrorMessage message={errors.confirmPassword?.message} />
          </div>
        </div>
        <button type="submit" className={s.btn}>
          Registration
        </button>
      </form>

      <p className={s.question}>
        Already have an account?
        <Link to="/login" className={s.login}>
          Login
        </Link>
      </p>
    </div>
  );
}
