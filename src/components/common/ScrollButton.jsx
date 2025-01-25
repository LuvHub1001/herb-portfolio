import styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useScroll } from "../../hooks";

function ScrollButton() {
  const { isVisible, scrollToTop } = useScroll();

  return (
    <Button onClick={scrollToTop} className={isVisible ? "show" : ""}>
      <ArrowUpwardIcon />
    </Button>
  );
}

export default ScrollButton;

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform: translateY(20px);

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: #555;
  }
`;
