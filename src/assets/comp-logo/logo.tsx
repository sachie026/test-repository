import React from "react";
import { LOGO_SIZE } from "../../utils/constant";

function LogoIcon() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
      alt="company-logo"
      width={LOGO_SIZE}
      className="mr-2"
    />
  );
}

export default LogoIcon;
