import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Modal() {
  const { closeModal, isModalOpen } = useGlobalContext();

  return (
    <section className={isModalOpen ? "modal show-modal" : "modal"}>
      <div className="container">
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
        <h5>modal content</h5>
      </div>
    </section>
  );
}
