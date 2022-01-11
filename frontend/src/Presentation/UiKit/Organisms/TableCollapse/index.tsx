import { useState } from "react";
import { Paper, TableCell, TableContainer, TableHead } from "@material-ui/core";
import { TableRow, TableAll, TableBody, CollapseRow } from "./styles";
import Button from "../../Atoms/Button";

import { IoEyeSharp } from "react-icons/io5";
import Loader from "../Loader";
import { ChooseColumns } from "Application/Utils/Functions/RemovalColumns";
import Table from "../Table";

function TableCollapse({
  data,
  contents,
  collapseData,
  collapseContents,
  url,
}: any) {
  const GettingColumns: string[] = data && data[0] && Object.keys(data[0]);
  const Columns: string[] =
    data && data[0] && ChooseColumns(GettingColumns, contents);

  const [expand, setExpand]: any = useState();

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
            {data && url && <TableCell>EDITAR</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row: any) => (
              <>
                <TableRow key={row.id} onClick={() => setExpand(row.id)}>
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
                {expand === row.id &&
                  row[collapseData].map((data: any) => (
                    <CollapseRow>
                      {data && (
                        <Table data={[data]} contents={collapseContents} />
                      )}
                    </CollapseRow>
                  ))}
              </>
            ))}
        </TableBody>
      </TableAll>
    </TableContainer>
  );
}

export default TableCollapse;
