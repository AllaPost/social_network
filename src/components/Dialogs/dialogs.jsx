import React from "react";
import { NavLink } from "react-router-dom";
import s from "./dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Alla" },
    { id: 2, name: "Stas" },
    { id: 3, name: "Alina" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Nastya" },
    { id: 6, name: "Ksusha" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "YO" },
  ];

  let dialogsElements = dialogs.map( d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map( m => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
       </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
