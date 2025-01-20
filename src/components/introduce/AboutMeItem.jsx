import { Box, Modal } from "@mui/material";
import styled from "styled-components";
import { useModal } from "../../hooks";

function AboutMeItem({ items }) {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <ItemWrapper className="item-wrapper">
      <div className="item-box" onClick={handleOpen}>
        {items.title}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={ModalStyle}>
          {items.content.map((item, idx) => {
            return (
              <Box key={idx}>
                <Box>
                  <strong>{item.subtitle}</strong>
                </Box>
                <br />
                <Box>{item.subcontent}</Box>
                <br />
              </Box>
            );
          })}
        </Box>
      </Modal>
    </ItemWrapper>
  );
}

export default AboutMeItem;

const ItemWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;

  .item-box {
    display: flex;
    width: 35%;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 8px 7px 1px 1px #efefef;
  }
`;

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
