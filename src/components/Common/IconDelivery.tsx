import React from "react";
import styled from "styled-components";

import EpodDelivery from "../../assets/epod-delivery-01.svg";

const IconSettings = () => {
  return (
    <div>
      <LogoHolder src={EpodDelivery} alt="Epod Delivery" />
    </div>
  );
};

export default IconSettings;
const LogoHolder = styled.img`
  margin-top: 2px;
  width: 1.75rem;
`;
