import React, { useEffect } from 'react'
import { LTWrapper, LTTitle, LaunchInfo, LaunchName, LaunchStatus, LunchList } from './styles'
import Upcoming from '../../images/upcoming.png'
import Done from '../../images/done.png'

const LaunchTimeline = ({ launches }) => {
    return (
        <LTWrapper>
            <LTTitle>Launch Timeline</LTTitle>
            <LunchList>
                <div>
                    {launches.map((launch) =>
                        <LaunchInfo key={launch.mission_name}>
                            <LaunchStatus src={launch.upcoming ? Upcoming : Done} />
                            <LaunchName> {launch.mission_name}</LaunchName>
                        </LaunchInfo>)}
                </div>
            </LunchList>
        </LTWrapper>
    )
}

export default LaunchTimeline
