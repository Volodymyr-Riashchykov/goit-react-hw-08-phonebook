import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../Redux/auth/auth-opertions";
import Input from "../components/Input/Input";
import s from "./Views.module.css"

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    
        // if (e.currentTarget.name === "имя") setName(e.currentTarget.value);
        if (e.currentTarget.name === "почта") setEmail(e.currentTarget.value);
        if (e.currentTarget.name === "пароль") setPassword(e.currentTarget.value);
    
  }
  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className={s.heading}>Страница авторизации</h1>
      <form className={s.form} action="" onSubmit={handleSubmite}>
        <Input
          type="email"
          name="Почта"
          value={email}
          handleChange={handleChange}
          title=""
          pattern=""
        />
        <Input
          type="password"
          name="Пароль"
          value={password}
          handleChange={handleChange}
          title=""
          pattern=""
        />
        <button className={s.btn} type="submit" onClick={handleSubmite}>
          Войти
        </button>
      </form>
    </div>
  );
}