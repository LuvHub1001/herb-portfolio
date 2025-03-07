import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { useModal, useMedia } from "../../hooks";

function AboutMeItem({ items }) {
  const { open, handleOpen, handleClose } = useModal();
  const { isMobile } = useMedia();

  return (
    <ItemWrapper className="item-wrapper">
      <div
        className="item-box"
        onClick={handleOpen}
        style={{ width: isMobile ? "85%" : "35%" }}
      >
        {items.title}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={isMobile ? MobileModalStyle : ModalStyle}>
          {items.content.map((item, idx) => (
            <Box key={idx}>
              <strong>{item.subtitle}</strong>
              <p>{item.subcontent}</p>
            </Box>
          ))}
        </Box>
      </Modal>
    </ItemWrapper>
  );
}

export default AboutMeItem;

const ItemWrapper = styled.div`
  display: flex;
  width: auto;
  height: 100px;
  justify-content: center;
  align-items: center;

  .item-box {
    display: flex;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 8px 7px 1px 1px #efefef;
    cursor: pointer;
  }
`;

const ModalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxWidth: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MobileModalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "380px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
