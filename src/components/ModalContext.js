import React, { createContext, useContext, useState } from "react";
//
// Create a context
export const ModalContext = createContext();
//
// Create a provider component
export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    selectOption: "",
    date: "",
    montant: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      date: value,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        formData,
        handleOpen,
        handleClose,
        handleChange,
        handleDateChange
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
// export default ModalProvider
//
export default function useModalContext() {
  return useContext(ModalContext);
}
