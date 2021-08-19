import React, { useRef, useState, useEffect } from "react";
import D3Chart from "./D3Chart";

const ChartWrapper = ({ gender, launches }) => {
    const chartArea = useRef(null);
    const [chart, setChart] = useState(null);
    const [launchesPerYear, setLaunchesPerYear] = useState(null)
    const [currentGender, setGender] = useState(null);

    useEffect(() => {
        if (!chart && !launchesPerYear) {
            setChart(new D3Chart(chartArea.current));
            setGender(gender, launches);
            setLaunchesPerYear(launches)
        } else {
            if (launchesPerYear !== launches) {
                chart.update(gender, launches);
                setGender(gender);
                setLaunchesPerYear(launches)
            }
        }
    }, [chart, gender, currentGender, launchesPerYear, launches]);

    return <div className="chart-area" ref={chartArea}></div>;
};

export default ChartWrapper;