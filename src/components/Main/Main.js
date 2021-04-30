import React from "react";
import "./Main.css";
import UserInfo from "../UserInfo/UserInfo";

function Main(props) {
  const [isName, setIsName] = React.useState(false);
  const handleCheckbox = ({ target: { checked } }) => {
    setIsName(checked);
  };
  return (
    <div className="main">
      <label className="main__item">
        <input
          className="main__chechbox"
          checked={isName}
          onChange={handleCheckbox}
          type="checkbox"
          name="box"
        />
        <span className="main__lable">Сортировать по имени пользователя</span>
      </label>

      <div className="main__container">
        {isName
          ? props.users
              .slice()
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((user) => (
                <UserInfo
                  user={user}
                  key={user.id}
                  onClickEdite={props.onClickEdite}
                  onClickDelete={props.onDeleteUser}
                />
              ))
          : props.users.map((user) => (
              <UserInfo
                user={user}
                key={user.id}
                onClickEdite={props.onClickEdite}
                onClickDelete={props.onDeleteUser}
              />
            ))}
      </div>
    </div>
  );
}

export default Main;
