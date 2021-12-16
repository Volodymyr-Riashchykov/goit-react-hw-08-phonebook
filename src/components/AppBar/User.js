import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../Redux/auth";
import { ImUser } from "react-icons/im";
import s from "./User.module.css";

export default function User() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.container}>
        <div>
          <ImUser className={s.ImUser} />
        </div>
        <p className={s.user}>Добрый день, {userName} </p>
        <button
          className={s.btn}
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Выйти
        </button>
      </div>
    </>
  );
}