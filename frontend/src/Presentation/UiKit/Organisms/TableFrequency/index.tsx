import {
  Collapse,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
} from "@material-ui/core";
import { TableRow, TableAll, TableBody } from "./styles";
import Button from "../../Atoms/Button";

import { IoEyeSharp } from "react-icons/io5";
import Loader from "../Loader";
import { ChooseColumns } from "Application/Utils/Functions/RemovalColumns";

function TableFrequency({ data, contents, url }: any) {
  const GettingColumns: string[] = data && data[0] && Object.keys(data[0]);
  const Columns: string[] | any =
    data && data[0] && ChooseColumns(GettingColumns, contents);

  return (
    <TableContainer component={Paper}>
      <TableAll>
        <TableHead>
          <TableRow>
            {Columns ? (
              Columns.map((data: string, key: number) => (
                <TableCell key={key}>{data.toUpperCase()}</TableCell>
              ))
            ) : (
              <Loader />
            )}
            {Columns &&
              Columns.frequencia.map((frequencia: any) => (
                <TableCell key={frequencia.id}>
                  {frequencia.periodo.toUpperCase()}
                </TableCell>
              ))}
            {data && url && <TableCell>EDITAR</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row: any) => (
              <>
                <TableRow key={row.id}>
                  {Columns.map((column: string, key: number) => (
                    <TableCell key={key}>{row[column]}</TableCell>
                  ))}
                  {data && url && (
                    <TableCell>
                      <Button
                        width="30px"
                        height="30px"
                        onClick={() =>
                          (window.location.href = `${url}/${row.id}`)
                        }
                        icon={<IoEyeSharp size="25px" />}
                      />
                    </TableCell>
                  )}
                </TableRow>
              </>
            ))}
        </TableBody>
      </TableAll>
    </TableContainer>
  );
}

export default TableFrequency;
