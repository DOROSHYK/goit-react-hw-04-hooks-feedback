import React from "react";
import PropTypes from "prop-types";
import style from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <>
      <div className={style.notificationContainer}>
        <p className={style.title}>{message}</p>
      </div>
    </>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
