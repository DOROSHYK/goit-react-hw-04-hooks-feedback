import React from "react";
import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <div className={style.section}>
        <div className={style.container}>
          <h2 className={style.title}>{title}</h2>
          {children}
        </div>
      </div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
// className={style.}
