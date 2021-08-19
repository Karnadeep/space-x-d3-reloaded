import React, { useEffect, useState } from 'react'
import { LaunchDashboardWrapper, LDLabel, Launches, LaunchCard, LaunchCount, LaunchLabel } from './styles'

const LaunchDashboard = ({ launches }) => {
    const [upcoming, setUpcoming] = useState(0)
    const [past, setPast] = useState(0)

    useEffect(() => {
        let upcomingLaunches = 0
        let pastLaunches = 0
        launches.forEach((launch) => {
            if (launch.upcoming === true) {
                upcomingLaunches++;
            }
            else {
                pastLaunches++;
            }
        })
        setUpcoming(upcomingLaunches);
        setPast(pastLaunches)
    }, [launches])
    return (
        <LaunchDashboardWrapper>
            <LDLabel>Launch Dashboard</LDLabel>
            <Launches>
                <LaunchCard>
                    <LaunchCount>{upcoming}</LaunchCount>
                    <LaunchLabel>Upcoming launches</LaunchLabel>
                </LaunchCard>
                <LaunchCard>
                    <LaunchCount>{past}</LaunchCount>
                    <LaunchLabel>Past launches</LaunchLabel>
                </LaunchCard>
                <LaunchCard>
                    <LaunchCount>{launches.length}</LaunchCount>
                    <LaunchLabel>Total launches</LaunchLabel>
                </LaunchCard>
            </Launches>
        </LaunchDashboardWrapper>
    )
}

export default LaunchDashboard
