import React, { useEffect, useState } from 'react'
import { HomeWrapper, HomeTitle } from './styles'
import LaunchDashboard from './launch-dashboard'
import LaunchAnalytics from './launch-analytics'

const Home = () => {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json()).then(data => {
                setLaunches(data)
            })
    }, [])

    return (
        <HomeWrapper>
            <HomeTitle>Analytics Dashboard</HomeTitle>
            <LaunchDashboard launches={launches} />
            <LaunchAnalytics launches={launches} />
        </HomeWrapper>
    )
}

export default Home
