import { useState, useEffect } from "react";
import Button from "@/components/Button";
import styles from "./Modal.module.scss";
import cls from "classnames";

const Modal = ({ title, open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
  }, [open]);

  function handleClose() {
    onClose();
    document.body.style.overflow = "auto";
  }

  return (
    <div className={cls(styles.modal, { [styles.active]: open })}>
      <div className={styles.background}></div>
      <section className={styles.content}>
        <header>
          <p>{title}</p>
          <Button onClick={handleClose} size="small">
            X
          </Button>
        </header>
        <article>{children}</article>
      </section>
    </div>
  );
};
export default Modal;
