import {
	NotificationContainer,
	BoderLeft,
	MessageContainer,
	Message,
} from "./Notification.styles";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";

const iconStyle = {
	cursor: "pointer",
};

function Notification({ isOpen = true, message = "Hello world", onClose }) {
	if (!isOpen) {
		return;
	}

	return (
		<NotificationContainer>
			<BoderLeft />
			<MessageContainer>
				<CheckIcon />
				<Message>{message}</Message>
			</MessageContainer>
			<CloseIcon style={iconStyle} onClick={onClose} />
		</NotificationContainer>
	);
}

export default Notification;
