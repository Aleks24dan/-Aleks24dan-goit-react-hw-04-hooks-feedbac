import PropTypes from 'prop-types';
import { Notification } from './Notification.styled';

export default function NotificationMes({ message }) {
  return <Notification>{message}</Notification>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
