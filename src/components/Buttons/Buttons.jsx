import PropTypes from 'prop-types';
import {Btn } from './Buttons.styled'

export const Buttons = ({ options, onLeaveFeedback }) => {
  return options.map((key, idx) => (
      <Btn key={idx} type="button" onClick={e => onLeaveFeedback(key)}>{key}</Btn>
    ))
};

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};