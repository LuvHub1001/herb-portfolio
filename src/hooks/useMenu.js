import { useState } from "react";

const useMenu = () => {
  const [isClick, setIsClick] = useState(false);

  const handleMenuClick = () => {
    setIsClick((prev) => !prev);
  };

  return { isClick, handleMenuClick, setIsClick };
};

export default useMenu;
