import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import data from "../../data/data";
import Main from "../Main/Main";
import Form from "../Form/Form";

function App() {
  const [users, setUsers] = useState(data);
  const [user, setUser] = useState(null);
const history = useHistory();

  function handleClickEdite(info) {
    setUser(info);
  }
  function handleUpdateUser(newInfo) {
    const newUsers = users.map((item) => {
      if (user.id === item.id) {
        item = { ...newInfo }
      }
      return item;
    });
    setUsers(newUsers);
    history.push("/");
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
        <Route path="/edit/:id">
          <Form onUpdateUser={handleUpdateUser} user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
