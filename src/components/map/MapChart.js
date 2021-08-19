import React, { Fragment } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
// import { csv } from "d3-fetch";

// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json"
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
const MapChart = ({ launchPads }) => {
    console.log(launchPads)
    //   const [data, setData] = useState([]);

    //   useEffect(() => {
    //     // https://www.bls.gov/lau/
    //     csv("/unemployment-by-county-2017.csv").then(counties => {
    //       setData(counties);
    //     });
    //   }, []);

    const colorScale = scaleQuantile()
        .domain(launchPads.map(launchPad => launchPad.count))
        .range([
            "#FFFFFF",
            "#2759F6",
            "#73F340",
            "#F7F850"
        ])
    // .range([
    //     "#ffedea",
    //     "#ffcec5",
    //     "#ffad9f",
    //     "#ff8a75",
    //     "#ff5533",
    //     "#e2492d",
    //     "#be3d26",
    //     "#9a311f",
    //     "#782618"
    // ]);

    return (
        <Fragment>
            <ComposableMap projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) => {
                        console.log(geographies)
                        return geographies.map(geo => {
                            {/* console.log(geo.properties) */ }
                            const cur = launchPads.find(launchPad => launchPad.region === geo.properties.name);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    stroke="#000000"
                                    fill={cur ? colorScale(cur.count) : "#EEE"}
                                />
                            );
                        })
                    }
                    }
                </Geographies>
            </ComposableMap>
        </Fragment>
    );
};

export default MapChart;
