import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import EpodLogo from "../Common/LogoImage";
import NotificationButton from "../Header/NotificationButton";

// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <EpodLogo />
        </Link>
      </LogoWrapper>
      <ItemsWrapper>
        {/* <NotificationsNoneIcon /> */}
        <NotificationButton />
        <SettingsOutlinedIcon />
        <ExitToAppIcon />
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1600px;
  margin: 0 auto;
  box-shadow: inset 0px -1px 0px #e2e2ea;
`;
const LogoWrapper = styled.div`
  margin-left: 0;
  a {
    text-decoration: none;
  }
`;
const ItemsWrapper = styled.div`
  margin-right: 25px;
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  grid-template-columns: 15px 15px 15px;
  @media (max-width: 450px) {
    grid-template-columns: 5px 5px 5px;
    margin-right: 10px;
    justify-items: end;
`;
