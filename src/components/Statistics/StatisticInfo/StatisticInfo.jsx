import PropTypes from 'prop-types';
import { Title, Description} from './StatisticInfo.styled'

export const StatisticInfo = ({
  Obj,
  total,
  positivePercentage,
  state,
  message,
}) => {
    return (
        <div>
            <Title>{message}</Title>
            {Obj.map((item, idx) => {
                return (
                    <Description key={idx}>{item[0]}: {item[1]}</Description>
                )
            })}
            <Description>Total: {total}</Description>
            <Description>Positive feedback: {!Number.isNaN(state) && positivePercentage}</Description>
        </div>
  )
};

StatisticInfo.propTypes = {
  message: PropTypes.string.isRequired,
  Obj: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};