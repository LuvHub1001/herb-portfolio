import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return {
    open,
    setOpen,
    handleOpen,
    handleClose,
  };
};

export default useModal;
