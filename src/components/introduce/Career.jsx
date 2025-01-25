import styled from "styled-components";
import CareerItem from "./CareerItem";

function Career() {
  return (
    <section id="career">
      <CareerWrapper>
        <h1>Career</h1>
        <CareerItem />
      </CareerWrapper>
    </section>
  );
}

export default Career;

const CareerWrapper = styled.div`
  display: inline-block;
  margin-top: 100px;
  width: 100%;
  height: 400px;
  text-align: center;
`;
