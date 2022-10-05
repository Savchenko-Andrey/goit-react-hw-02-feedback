import { StatisticInfo } from './StatisticInfo/StatisticInfo'

export const Statistics = ({
    message,
    Obj,
    total,
    positivePercentage,
    state,
}) => {
    return <StatisticInfo
                Obj={Obj}
                total={total}
                positivePercentage={positivePercentage}
                state={state}
                message={message} />
};

