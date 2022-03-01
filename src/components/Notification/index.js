import {
	NotificationContainer,
	BoderLeft,
	MessageContainer,
} from "./Notification.styles";

function Notification({ message = "Hello world" }) {
	return (
		<NotificationContainer>
			<BoderLeft />
			<MessageContainer>{message}</MessageContainer>
		</NotificationContainer>
	);
}

export default Notification;
