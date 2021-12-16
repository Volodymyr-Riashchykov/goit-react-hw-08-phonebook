import phonebookOperations from "../Redux/phonebook/phonebook-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//
import Form from "../components/Form/Form";
import ContactList from "../components/ContactList/ContactList";
import SearchContact from "../components/SearhContact/SearchContact";
import s from "./Views.module.css";

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1 className={s.heading}>Телефонная книга</h1>
      <Form />
      <h2 className={s.contact}>Контакты</h2>
      <SearchContact />
      <ContactList />
    </>
  );
}