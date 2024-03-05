import { useEffect, useRef } from "react";
import { useClickOutside } from "@/utils/hooks/useClickOutside";
import { useEscKey } from "@/utils/hooks/useEscKey";

import Button from "@/components/Button";
import styles from "./Modal.module.scss";
import cls from "classnames";

const Modal = ({ title, open, onClose, children }) => {
  const modalRef = useRef(null);

  useClickOutside(
    modalRef,
    () => {
      handleClose();
    },
    [modalRef]
  );

  useEscKey(() => {
    handleClose();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    // const handleEscKey = (e) => {
    //   if (e.key === "Escape") {
    //     onClose();
    //   }
    // };

    // const handleClickOutSite = (e) => {
    //   if (modalRef.current && !modalRef.current.contains(e.target)) {
    //     onClose();
    //   }
    // };

    // document.addEventListener("keydown", handleEscKey);
    // document.addEventListener("mousedown", handleClickOutSite);

    //event based structure , event based design pattern,custom event
    // console.log("open modal");
    // return () => {
    //   // document.removeEventListener("keydown", handleEscKey);
    //   // document.removeEventListener("mousedown", handleClickOutSite);
    //   console.log("modal unmount");
    // };
  }, [open]);

  function handleClose() {
    onClose();
    document.body.style.overflow = "auto";
  }

  return (
    <div className={cls(styles.modal, { [styles.active]: open })}>
      <div className={styles.background}></div>
      <section className={styles.content} ref={modalRef}>
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
