import s from "./LogOutBtn.module.css";
import Modal from "../Modal/Modal.jsx";
import ModalApproveAction from "../ModalApproveAction/ModalApproveAction.jsx";
import { useState } from "react";

export default function LogOutBtn() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className={s.btn} onClick={() => setModalOpen(true)}>
        Log out
      </button>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <ModalApproveAction onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}
