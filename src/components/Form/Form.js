import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import phonebookOperation from "../../Redux/phonebook/phonebook-operations";
import * as phonebookSelectors from "../../Redux/phonebook/phonebook-selectors";
import Input from "../Input/Input"
import s from "../../views/Views.module.css"

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(phonebookSelectors.getContactList);

  const dispatch = useDispatch();
  const handleChange = e => {
    // console.log('e==',e.currentTarget);
        if (e.currentTarget.name === "имя") setName(e.currentTarget.value);
        if (e.currentTarget.name === "номер") setNumber(e.currentTarget.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase()))
        {
          alert(`"${name}" is already in contacts.`)
        }
    else dispatch(phonebookOperation.addContact(name, number));
    
    resetState();
  };

  const resetState = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input
          type="text"
          name="Имя"
          value={name}
          handleChange={handleChange}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
      <Input
          type="tel"
          name="Номер"
          value={number}
          handleChange={handleChange}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <button type="submit" className={s.btn}>Добавить контакт</button>
    </form>
  );
}