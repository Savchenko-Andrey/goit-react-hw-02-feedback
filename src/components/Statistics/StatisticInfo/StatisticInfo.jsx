import PropTypes from 'prop-types';

export const StatisticInfo = ({
  Obj,
  total,
  positivePercentage,
  state,
  message,
}) => {
    return (
        <div>
            <h1>{message}</h1>
            {Obj.map((item, idx) => {
                return (
                    <p key={idx}>{item[0]}: {item[1]}</p>
                )
            })}
            <p>Total: {total}</p>
            <p>Positive feedback: {!Number.isNaN(state) && positivePercentage}</p>
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