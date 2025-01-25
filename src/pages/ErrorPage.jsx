import styled from "styled-components";
import { useMedia } from "../hooks";

function ErrorPage() {
  const { isMobile } = useMedia();

  return (
    <ErrorWrapper>
      <div className="box">
        {isMobile ? (
          <>
            <h2>예상치 못한 에러가 발생하였습니다⚠️</h2>
            <h2>다시 시도해주세요😭</h2>
          </>
        ) : (
          <>
            <h1>예상치 못한 에러가 발생하였습니다⚠️</h1>
            <h1>다시 시도해주세요😭</h1>
          </>
        )}
      </div>
    </ErrorWrapper>
  );
}

export default ErrorPage;

const ErrorWrapper = styled.div`
  display: flex;

  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  .box > h1 {
    display: flex;
    justify-content: center;
  }
`;
