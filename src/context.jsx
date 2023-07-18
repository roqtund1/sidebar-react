import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// custom hook

export const useGlobalContext = () => useContext(AppContext);

export default function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
