import React from "react";
import { Link } from "react-router-dom";
import "./UserInfo.css";

function UserInfo(props) {
  function handleClick() {
    props.onClickEdite(props.user);
  }
  function handleClickDelete() {
    props.onClickDelete(props.user);
  }

  return (
    <div className="user">
      <p>Имя пользователя: {props.user.name}</p>
      <p>Номер телефона: {props.user.phone}</p>
      <p>Адрес электронной почты: {props.user.email}</p>
      <p>Страна: {props.user.country}</p>
      <p>Возраст: {props.user.age}</p>
      <div className="user__container-button">
        <Link to="/form">
          <button onClick={handleClick} className="user__button">
            Обновить
          </button>
        </Link>
        <button onClick={handleClickDelete} className="user__button">
          Удалить
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
