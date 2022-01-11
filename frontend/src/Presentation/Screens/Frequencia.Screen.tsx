import { API } from "Infrastructure/APIS";
import { LayoutOne } from "Presentation/Layouts/Layout1";
import TableCollapse from "Presentation/UiKit/Organisms/TableCollapse";
import { useEffect, useState } from "react";

function FrequenciaScreen() {
  const [frequencia, setFrequencia] = useState<any>();

  useEffect(() => {
    (async () => {
      const { data } = await API.get("/servidor/frequencia");
      setFrequencia(data);
    })();
  }, []);

  return (
    <LayoutOne>
      <TableCollapse
        data={frequencia}
        contents={["nome", "endereco", "telefone"]}
        collapseData="frequencia"
        collapseContents={["periodo", "id", "status", "observacao"]}
        url="/postos"
      />
    </LayoutOne>
  );
}

export default FrequenciaScreen;
