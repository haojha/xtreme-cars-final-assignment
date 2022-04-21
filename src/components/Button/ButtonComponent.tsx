import { Button } from "@mui/material";
import React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = ({ buttonText, submitButton = false }: any) => {
  return (
    <Button
      type={submitButton ? "submit" : "button"}
      id="button"
      variant="contained"
    >
      {buttonText}
    </Button>
  );
};

export default ButtonComponent;
