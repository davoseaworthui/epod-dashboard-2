import React from "react";
import styled from "styled-components";
import Item from "../Menu/Item";

import IconDelivery from "../../Common/IconDelivery";
import IconReports from "../../Common/IconReports";
import IconActivity from "../../Common/IconActivity";

const itemsData = [
  {
    name: "Delivery",
    icon: IconDelivery(),
    link: "/",
  },
  {
    name: "Reports",
    icon: IconReports(),
    link: "/Reports",
  },
  {
    name: "Activity Logs",
    icon: IconActivity(),
    link: "/Activities",
  },
];

interface IItemProps {
  name: string;
  icon: object | string;
  link: string;
}

const items = itemsData.map((item: IItemProps, idx: number): object => (
  <Item key={idx} {...item} />
));

const Menu = () => {
  return <Wrapper>{items}</Wrapper>;
};

export default Menu;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  @media (max-width: 620px) {
    margin-top: 10px;
  }
`;
