import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as phonebookSelectors from "../../Redux/phonebook/phonebook-selectors";
import phonebookOperations from "../../Redux/phonebook/phonebook-operations"
import s from "./ContactList.module.css"

export default function СontactList() {
  const contacts = useSelector(phonebookSelectors.getFilterContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <div>
          <ul className={s.list}>
            {contacts.map(({ id, name, number }) => {
              return (
                <li key={id} className={s.item}>
                  <p className={s.name}>{name}: </p>
                  <p className={s.number}>{number}</p>
                  <button
                    className={s.btn}
                    onClick={() => dispatch(phonebookOperations.onDeleted(id))}
                  >
                    Удалить
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}