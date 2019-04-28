import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

const cx = classNames.bind(styles);

export const ClassNamesExample = () => {
  return <div className={cx({ button: true })}>Hello Class Names</div>;
};
