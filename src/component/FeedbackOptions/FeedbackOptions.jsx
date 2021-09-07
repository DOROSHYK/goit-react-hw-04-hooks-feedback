import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import style from "./FeedBack.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={style.containerButton}>
        {options.map((option) => (
          <button
            className={style.button}
            key={shortid.generate()}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
