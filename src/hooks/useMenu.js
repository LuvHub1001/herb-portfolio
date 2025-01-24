import { useState } from "react";

const useMenu = () => {
  const [isClick, setIsClick] = useState(false);

  const handleMenuClick = () => {
    setIsClick((prev) => !prev);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { isClick, handleMenuClick, setIsClick, handleScroll };
};

export default useMenu;
