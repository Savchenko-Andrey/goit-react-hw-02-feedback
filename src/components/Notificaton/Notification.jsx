import PropTypes from 'prop-types';
import { Title } from './Notififcaton.styled';

export const Notification = ({ message }) => {
  return <Title>{message}</Title>;
};

Notification.propTypes = PropTypes.string.isRequired;