import styled from "styled-components";

export const Container = styled.div`
  background-color: whitesmoke;
  border-radius: 15px;
  width: 70vw;
  height: max-content;
  max-height: 70vh;
  z-index: 999999;
  padding: 15px;
  position: absolute;
  top: 17vh;
  left: 17vw;

  display: flex;
  flex-direction: column;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 425px) {
    width: 90vw;
    left: 5vw;
  }
`;
