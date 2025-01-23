import { useMediaQuery } from "@mui/material";

const useMedia = (media = "(max-width: 1279px)") => {
  const isMobile = useMediaQuery(media);

  return {
    isMobile,
  };
};

export default useMedia;
