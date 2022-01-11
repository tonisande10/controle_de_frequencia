import { Avatar, Typography } from "@material-ui/core";
import { Container } from "./styles";

function HeaderProfile({ username, url }: any) {
  return (
    <Container>
      <Typography variant="caption">{username}</Typography>
      <Avatar style={{ border: "1px solid black" }} src={url} />
    </Container>
  );
}

export default HeaderProfile;
