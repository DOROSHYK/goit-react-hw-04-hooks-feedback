import React from "react";
import shortid from "shortid";
import style from "./FeedBack.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.containerButton}>
      {options.map((option) => (
        <button
          className={style.button}
          key={shortid.generate()}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
