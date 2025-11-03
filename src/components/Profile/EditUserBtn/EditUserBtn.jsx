import s from "./EditUserBtn.module.css";
import Modal from "../../Modal/Modal";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
import { useState } from "react";

export default function EditUserBtn({ children, variant = "default" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button
        className={`${s.btn} ${s[variant]}`}
        onClick={() => setModalOpen(true)}
      >
        {children}
      </button>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <ModalEditUser onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}
