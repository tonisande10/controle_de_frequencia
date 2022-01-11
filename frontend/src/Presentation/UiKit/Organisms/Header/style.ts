import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  min-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: bold;
  z-index: 10;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.72);
  position: fixed;
  z-index: 9999;
`;
