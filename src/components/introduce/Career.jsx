import styled from "styled-components";
import CareerItem from "./CareerItem";

function Career() {
  return (
    <CareerWrapper>
      <h1>Career</h1>
      <CareerItem />
    </CareerWrapper>
  );
}

export default Career;

const CareerWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 400px;
  margin-top: 40px;
  text-align: center;
`;
