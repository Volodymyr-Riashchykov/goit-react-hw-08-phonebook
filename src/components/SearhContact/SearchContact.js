import React from "react";
import * as phonebookActions from "../../Redux/phonebook/phonebook-actions";
import { useSelector, useDispatch } from "react-redux";
import * as phonebookSelectors from "../../Redux/phonebook/phonebook-selectors";
import Input from "../Input/Input";
import s from "./SearhContact.module.css"

export default function SearchContact() {
  const contacts = useSelector(phonebookSelectors.getContactFilter);
  const dispatch = useDispatch();

  const searchContact = (e) => {
    dispatch(phonebookActions.veluesFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <Input
                type="text"
                name="Поиск контактов по имени"
                value={contacts}
                handleChange={searchContact}
                title=""
                pattern=""
            />
    </div>
  );
}