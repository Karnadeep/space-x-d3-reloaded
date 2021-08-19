import React from 'react'
import { LaunchAnalyticsWrapper } from './styles'
import BarChart from '../../bar-chart'
import Map from '../../map'
import LaunchTimeline from '../../launch-timeline'

const LaunchAnalytics = ({ launches }) => {
    return (
        <LaunchAnalyticsWrapper>
            <Map />
            <BarChart launches={launches} />
            <LaunchTimeline launches={launches} />
        </LaunchAnalyticsWrapper>
    )
}

export default LaunchAnalytics
