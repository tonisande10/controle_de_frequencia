import { ThemeColors } from "Application/Themes/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  max-width: 170px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    width: 100%;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 700;
    color: ${ThemeColors.primary};
  }
`;
