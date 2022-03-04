import React from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-left.svg";
import { useHistory } from "react-router-dom";

function GoBack({ url }) {
	const history = useHistory();

	return (
		<Arrow
			style={{ cursor: "pointer" }}
			onClick={url ? () => history.push(url) : history.goBack}
		/>
	);
}

export default GoBack;
