import { Notification } from '../../Notificaton/Notification'
import { StatisticInfo } from '../StatisticInfo/StatisticInfo'

export const Statistics = ({
    message,
    Obj,
    total,
    positivePercentage,
    state,
}) => {
    return (<div>
        { total === 0 ? (
            <Notification message="There is no feedback" />
        ) : (
            <StatisticInfo
                Obj={Obj}
                total={total}
                positivePercentage={positivePercentage}
                state={state}
                    message={message} />
            ) 
}
    </div>
    )
};

