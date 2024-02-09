// creating a component and exporting it
import React from "react";
import { useState } from "react";
import styles from "./IandE.module.css";

function IandE() {
  return (
    <>
      <div>{/* /two columns one with image other with Text/ */}</div>
      <div className={styles.IandE}>
        <h1>Image and Events</h1>
      </div>
    </>
  );
}
export default IandE;
