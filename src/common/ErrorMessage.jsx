import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/error.css";

const ErrorMessage = ({ handleClose, errMsg }) => {
  return (
    <div className="err-message-container d-flex justify-between">
      <div>{errMsg}</div>
      <div onClick={() => handleClose()} className="cursor-pointer">
        <CloseIcon fontSize="15" />
      </div>
    </div>
  );
};

export default ErrorMessage;
