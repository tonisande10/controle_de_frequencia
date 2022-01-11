import React from "react";
import HeaderProfile from "../../Molecules/HeaderProfile";
import { Container } from "./style";

function Header() {
  return (
    <Container>
      <img
        src="https://static.blogdaresenhageral.com.br/wp-content/uploads/2015/08/DPT_BAHIA.png"
        alt="LOGO"
        width="35px"
      />
      <HeaderProfile
        username="Usuario"
        url="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
      />
    </Container>
  );
}

export default Header;
