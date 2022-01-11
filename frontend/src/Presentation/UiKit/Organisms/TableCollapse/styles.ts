import {
  TableRow as TableRowMUI,
  Table as TableMUI,
  TableBody as TableBodyMUI,
} from "@material-ui/core";
import { ThemeColors } from "Application/Themes/colors";
import styled from "styled-components";

export const TableRow = styled(TableRowMUI)``;

export const TableAll = styled(TableMUI)``;

export const TableBody = styled(TableBodyMUI)``;

export const CollapseRow = styled.div`
  width: 100%;
  height: max-content;
  tr {
    background: ${ThemeColors.primary};
  }
`