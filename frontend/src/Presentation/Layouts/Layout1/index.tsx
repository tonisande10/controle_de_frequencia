import { ILayoutOne } from "./interfaces";
import { Container, Contents } from "./styles";
import { useHistory } from "react-router";
import Button from "Presentation/UiKit/Atoms/Button";
import { IoArrowBack } from "react-icons/io5";

function LayoutOne({ children }: ILayoutOne) {
  const Router = useHistory();
  return (
    <Container>
      { Router.location.pathname !== '/' && (
      <Button
        text="Voltar"
        icon={<IoArrowBack />}
        onClick={() => Router.goBack()}
        width="100%"
      />
      )}
      <Contents>{children}</Contents>
    </Container>
  );
}

export { LayoutOne };
