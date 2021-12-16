import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./App.module.css";
import AppBar from "../AppBar/AppBar";
import { Switch } from "react-router-dom";
import RegisterView from "../../views/RegisterView";
import LoginView from "../../views/LoginView";
import ContactsView from "../../views/ContactsView";
import HomeView from "../../views/HomeView";
import PrivateRoute from "../../views/PrivateRoute";
import PublicRoute from "../../views/PublicRoute";
import { authOperations,authSelectors } from "../../Redux/auth";
// import { ToastContainer } from "react-toastify";

export default function Mobile() {
  const dispatch = useDispatch();
  const refreshingPage = useSelector(authSelectors.getRefreshingPage);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !refreshingPage && (
      <div className={s.container}>
        <AppBar />
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" exact restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" exact restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" exact>
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </div>
    )
  );
}