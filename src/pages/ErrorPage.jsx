import styled from "styled-components";

function ErrorPage() {
  return (
    <ErrorWrapper>
      <div className="box">
        <h1>예상치 못한 에러가 발생하였습니다⚠️</h1>
        <h1>다시 시도해주세요😭</h1>
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

  .box > h1 {
    display: flex;
    justify-content: center;
  }
`;
