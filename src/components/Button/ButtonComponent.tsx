import { Button } from "@mui/material";
import React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = ({ buttonText }: any) => {
  return (
    <Button id="button" variant="contained">
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
