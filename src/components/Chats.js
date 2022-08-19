import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "./firebase";

import { useAuth } from "../context/AuthContex";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">SR Chat</div>
      </div>
      <div className="logout-tab" onClick={handleLogout}>
        Logout
      </div>
      <ChatEngine
        height="calc(100vh-66px"
        projectId="
cec488d0-4191-435c-9358-181040165498"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
