import { API } from "Infrastructure/APIS";
import { LayoutOne } from "Presentation/Layouts/Layout1";
import Table from "Presentation/UiKit/Organisms/Table";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FrequenciaDoFuncionarioScreen() {
  const [frequencia, setFrequencia] = useState<any>();
  console.log(frequencia);
  const { id }: any = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await API.get(`/frequencia/servidor/${id}`);
      const data2 = data.map((obj: any) => {
        obj.Coordenador = obj.Coordenador && obj.Coordenador.nome;
        obj.Funcionario = obj.Funcionario && obj.Funcionario.nome;
        return obj;
      });
      setFrequencia(data2);
    })();
  }, [id]);

  return (
    <LayoutOne>
      <div>
        <h2>{frequencia?.[0].Coordenador || frequencia?.[0].Funcionario}</h2>
        <Table
          data={frequencia}
          contents={["periodo", "status", "observacao"]}
        />
      </div>
    </LayoutOne>
  );
}

export default FrequenciaDoFuncionarioScreen;
