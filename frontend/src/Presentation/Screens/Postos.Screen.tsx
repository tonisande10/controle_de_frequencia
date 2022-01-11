import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { API } from "Infrastructure/APIS";
// import { Header } from "Infrastructure/Data/TablesData/Table.Interior";
import { Centralize } from "../Layouts/Grids/Flex";
import { LayoutOne } from "../Layouts/Layout1";
// import Modal from "../UiKit/Organisms/Modal";
import Table from "../UiKit/Organisms/Table";

function PostosScreen() {
  const [postos, setPostos]: any = useState();
  const { tipoposto }: any = useParams();
  console.log(postos);

  useEffect(() => {
    (async () => {
      const { data: postos } = await API.get(
        `/postos/tipoposto/${tipoposto.toUpperCase()}`
      );
      setPostos(postos);
    })();
  }, [tipoposto]);

  return (
    <LayoutOne>
      {/* <Modal children={<Table />} /> */}
      <Centralize>
        <Table
          data={postos}
          contents={[
            "nome",
            "email",
            "tipoposto",
            "telefone",
            "telefone2",
            "coordenador",
            "telefone3",
          ]}
          url="/postos"
        />
      </Centralize>
    </LayoutOne>
  );
}

export default PostosScreen;
