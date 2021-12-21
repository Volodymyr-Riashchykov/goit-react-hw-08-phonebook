import { useState } from "react";
import { useDispatch } from "react-redux";
import  authOperations  from "../Redux/auth/auth-opertions";
import Input from "../components/Input/Input"
import s from "./Views.module.css"

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = e => {
    
        if (e.currentTarget.name === "имя") setName(e.currentTarget.value);
        if (e.currentTarget.name === "почта") setEmail(e.currentTarget.value);
        if (e.currentTarget.name === "пароль") setPassword(e.currentTarget.value);
    
  }
  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  
  return (
    <div>
      <h1 className={s.heading}>Страница регистрации</h1>
      <form className={s.form} action="" onSubmit={handleSubmite}>
        <Input
          type="text"
          name="Имя"
          value={name}
          handleChange={handleChange}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <Input
          type="email"
          name="Почта"
          value={email}
          handleChange={handleChange}
          title="Email должен содержать знаки @ и ."
          pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        />
        <Input
          type="password"
          name="Пароль"
          value={password}
          handleChange={handleChange}
          title="Пароль может состоять только из букв, цифр, апострофа, тире и пробелов."
          pattern="^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$"
        />
        <button className={s.btn} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}