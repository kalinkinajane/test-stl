import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
function Form({ onUpdateUser, user }) {
  const [values, setValues] = React.useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    age: "",
  });

  React.useEffect(() => {
    setValues(user);
  }, [user]);

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }
  return (
    <div className="form">
      <Link to="/">
        <button
          className="form__close"
          type="button"
          aria-label="Закрыть"
        ></button>
      </Link>
      <h2 className="form__title">Редактировать данные пользователя</h2>
      <form className="user__form" onSubmit={handleSubmit}>
        <input
          className="form__item user__name"
          name="name"
          value={values.name || ""}
          placeholder="Имя"
          onChange={handleChange}
        />
        <input
          className="form__item user__phone"
          name="phone"
          value={values.phone || ""}
          placeholder="Телефон"
          onChange={handleChange}
        />
        <input
          className="form__item user__email"
          name="email"
          value={values.email || ""}
          placeholder="Email"
          onChange={handleChange}
        />
        <div className="form__country">
          <span className="form__text-country">
            Выберите страну&nbsp;&nbsp;
          </span>
          <select
            className="form__select"
            name="country"
            value={values.country || ""}
            onChange={handleChange}
          >
            <option selected>Страна:</option>
            <option value="Австралия">Австралия</option>
            <option value="Россия">Россия</option>
            <option value="США">США</option>
          </select>
        </div>
        <input
          className="form__item user__age"
          name="age"
          value={values.age || ""}
          placeholder="Возраст"
          onChange={handleChange}
        />
        <button className="form__button" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}

export default Form;
