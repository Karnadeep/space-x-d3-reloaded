import React, { useEffect, useState } from 'react'
import { BarChartWrapper, ChartTitle } from './styles'
import ChartWrapper from './ChartWrapper'

const BarChart = ({ launches }) => {
    const [launchesPerYear, setLaunchesPerYear] = useState([])
    useEffect(() => {
        let noOfLuanches = []

        function addNewData(dataArray, launch) {
            const obj = {
                launch_year: launch.launch_year,
                count: 1
            }
            dataArray.push(obj)
            return dataArray

        }
        launches.forEach((launch) => {
            if (noOfLuanches.length === 0) {
                // const obj = {
                //     launch_year: launch.launch_year,
                //     count: 1
                // }
                // noOfLuanches.push(obj)
                noOfLuanches = addNewData(noOfLuanches, launch)
            }
            let obj = noOfLuanches.find((item) => item.launch_year === launch.launch_year)
            if (obj) {
                obj.count++;
            } else {
                // const obj = {
                //     launch_year: launch.launch_year,
                //     count: 1
                // }
                // noOfLuanches.push(obj)
                noOfLuanches = addNewData(noOfLuanches, launch)
            }

        })
        setLaunchesPerYear(noOfLuanches)

    }, [launches])

    return (
        <BarChartWrapper>
            <ChartTitle>Number of Launches over year</ChartTitle>
            <ChartWrapper gender="men" launches={launchesPerYear} />
        </BarChartWrapper>
    )
}

export default BarChart
