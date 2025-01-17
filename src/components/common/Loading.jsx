import { CircularProgress } from "@mui/material";
import styled from "styled-components";

function Loading() {
  return (
    <LoadingWrapper>
      <CircularProgress />
    </LoadingWrapper>
  );
}

export default Loading;

const LoadingWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  aling-items: center;
`;
