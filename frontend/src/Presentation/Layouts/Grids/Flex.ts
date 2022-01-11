import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: max-content;
  gap: 25px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Centralize = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: 15px;
  gap: 10px;
`;
