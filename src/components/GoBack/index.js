import React from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-left.svg";
import { useHistory } from "react-router-dom";

function GoBack() {
  const history = useHistory();

  return <Arrow style={{ cursor: "pointer" }} onClick={history.goBack} />;
}

export default GoBack;
