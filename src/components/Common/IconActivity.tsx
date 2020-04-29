import React from "react";
import styled from "styled-components";

import EpodActivity from "../../assets/epod-activity-01.svg";

const IconSettings = () => {
  return (
    <div>
      <LogoHolder src={EpodActivity} alt="Epod Activities" />
    </div>
  );
};

export default IconSettings;
const LogoHolder = styled.img`
  margin-top: 2px;
  width: 1.75rem;
`;
