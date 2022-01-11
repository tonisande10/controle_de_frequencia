import { Typography } from "@material-ui/core";
import { API } from "Infrastructure/APIS";
import { FlexRow } from "Presentation/Layouts/Grids/Flex";
import { LayoutOne } from "Presentation/Layouts/Layout1";
import Button from "Presentation/UiKit/Atoms/Button";
import { useEffect, useState } from "react";
import { FaCalendarCheck, FaUserEdit } from "react-icons/fa";
import { useParams } from "react-router";

function ListarFuncionarioScreen() {
  const [servidor, setServidor] = useState<any>([{}]);
  const { id }: any = useParams();

  useEffect(() => {
    (async () => {
      const { data: servidor } = await API.get(`/servidor/${id}`);
      setServidor(servidor);
    })();
  }, [id]);

  return (
    <LayoutOne>
      <div style={{ marginTop: 50 }}>
        <Typography variant="h5">Nome: {servidor?.nome}</Typography>
        <Typography variant="h6">
          Matricula: {servidor?.matricula}
        </Typography>
        {servidor?.cargo && (
          <Typography variant="h6">Cargo: {servidor?.cargo}</Typography>
        )}
        {servidor?.endereco && (
          <Typography variant="h6">
            Endereço: {servidor?.endereco}
          </Typography>
        )}
        {servidor?.rg && (
          <Typography variant="h6">RG: {servidor?.rg}</Typography>
        )}
        {servidor?.data_de_nascimento && (
          <Typography variant="h6">
            Data de Nascimento:
            {servidor?.data_de_nascimento}
          </Typography>
        )}

        <Typography variant="h6">
          Telefone:
          {servidor?.telefone}
        </Typography>
      </div>
      <FlexRow>
        <Button
          width="30%"
          height="50px"
          text="Frequência"
          icon={<FaCalendarCheck />}
          onClick={() =>
            (window.location.href = `/funcionario/frequencia/${id}`)
          }
        />
        <Button
          width="30%"
          height="50px"
          text="Editar"
          icon={<FaUserEdit />}
          onClick={() => (window.location.href = `/funcionario/editar/${id}`)}
        />
      </FlexRow>
    </LayoutOne>
  );
}

export default ListarFuncionarioScreen;
