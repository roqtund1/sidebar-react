import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Home() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main className="main">
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>

      <button onClick={openModal} className=" btn modal-btn">
        show modal
      </button>
    </main>
  );
}
