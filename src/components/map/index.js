import React, { useEffect, useState } from 'react'
import { MapWrapper, MapTitle } from './styles'
import MapChart from './MapChart'

const Map = () => {
    const [launchPads, setLaunchPads] = useState([])
    function evaluateNumberOfLaunches(launchPads) {
        let dataArray = []
        launchPads.forEach(launchPad => {
            if (dataArray.length === 0) {
                const obj = {
                    region: launchPad.location.region,
                    count: 1
                }
                dataArray.push(obj)
            }
            else {
                const object = dataArray.find(item => item.region === launchPad.location.region)
                if (object) {
                    object.count++;
                } else {
                    const obj = {
                        region: launchPad.location.region,
                        count: 1
                    }
                    dataArray.push(obj)
                }
            }
        })
        return dataArray
    }
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launchpads')
            .then(res => res.json())
            .then(data => {
                const missilesLaunched = evaluateNumberOfLaunches(data);
                const sorted = missilesLaunched.sort((a, b) => a.count - b.count);
                console.log(sorted)
                setLaunchPads(missilesLaunched)
            })

    }, [])

    return (
        <MapWrapper>
            <MapTitle>Launchpad locations</MapTitle>
            <MapChart launchPads={launchPads} />
        </MapWrapper>
    )
}

export default Map
