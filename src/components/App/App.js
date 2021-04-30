import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import data from "../../data/data";
import Main from "../Main/Main";
import Form from "../Form/Form";

function App() {
  const [users, setUsers] = useState(data);
  const [user, setUser] = useState(null);

  function handleClickEdite(info) {
    setUser(info);
  }
  function handleUpdateUser(newInfo) {
    const newUsers = users.map((item) => {
      if (user.id === item.id) {
        item.name = newInfo.name;
        item.phone = newInfo.phone;
        item.email = newInfo.email;
        item.country = newInfo.country;
        item.age = newInfo.age;
      }
      return item;
    });
    setUsers(newUsers);
  }
  function handleDeleteUser(user) {
    const changedUsers = users.filter((item) => item.id !== user.id);
    setUsers(changedUsers);
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main
            users={users}
            onClickEdite={handleClickEdite}
            onDeleteUser={handleDeleteUser}
          />
        </Route>
        <Route path="/form">
          <Form onUpdateUser={handleUpdateUser} user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
