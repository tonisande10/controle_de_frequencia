import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  position: absolute;
  padding: 0;
  left: 0;
  top: 0;
  font-family: "Quicksand", sans-serif;
`;

export const Contents = styled.div`
  /* width: 100%; */
  height: 100%;
  overflow-y: scroll;
  padding: 70px 20%;
  background-color: #f7f7ff;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  display: grid;

  .row-three-contents {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .row-two-contents {
    grid-template-columns: 1fr 1fr;
  }

  .row-one-content {
    grid-template-columns: 1fr;
  }

  .column-three-contents {
    grid-template-rows: 1fr 1fr 1fr;
  }

  .column-two-contents {
    grid-template-rows: 1fr 1fr;
  }

  .column-one-content {
    grid-template-rows: 1fr;
  }

  @media (max-width: 425px) {
    padding: 5px 15px;
  }
`;
