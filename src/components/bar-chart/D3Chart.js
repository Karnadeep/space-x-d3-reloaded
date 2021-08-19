import * as d3 from "d3";
const MARGIN = { TOP: 30, BOTTOM: 50, LEFT: 50, RIGHT: 10 };
const WIDTH = 400 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 280 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Chart {
    constructor(element) {
        const self = this;

        // const urls = [
        //     d3.json("https://udemy-react-d3.firebaseio.com/tallest_men.json"),
        //     d3.json("https://udemy-react-d3.firebaseio.com/tallest_women.json"),
        // ];

        self.svg = d3
            .select(element)
            .append("svg")
            .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
            .append("g")
            .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);
        // .style("color", "white");

        self.xLabel = self.svg
            .append("text")
            .attr("x", WIDTH / 2)
            .attr("y", HEIGHT + 40)
            .attr("text-anchor", "middle")
            .text("Launches per Year")
            .style("color", "green", "important");

        self.svg
            .append("text")
            .attr("x", -HEIGHT / 2)
            .attr("y", -30)
            .attr("text-anchor", "middle")
            .text("Number of Launches")
            .attr("transform", `rotate(-90)`);

        self.svg.selectAll("text").style("color", "white")

        self.xAxisGroup = self.svg
            .append("g")
            .attr("transform", `translate(0, ${HEIGHT})`);

        self.yAxisGroup = self.svg.append("g");

        // Promise.all(urls).then((datasets) => {
        //     self.menData = datasets[0];
        //     self.womenData = datasets[1];
        //     self.update("men");
        // });
    }

    update(gender, launches) {
        let { svg, xAxisGroup, yAxisGroup, menData, womenData } = this;
        const data = launches

        const y = d3
            .scaleLinear()
            .domain([
                0,
                d3.max(data, (d) => d.count),
            ])
            .range([HEIGHT, 0]);

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.launch_year))
            .range([0, WIDTH])
            .padding(0.4);

        const xAxisCall = d3.axisBottom(x);
        xAxisGroup.transition().duration(500).call(xAxisCall);

        const yAxisCall = d3.axisLeft(y);
        yAxisGroup.transition().duration(500).call(yAxisCall);

        // DATA JOIN
        const rects = svg.selectAll("rect").data(data);

        // EXIT
        rects
            .exit()
            .transition()
            .duration(500)
            .attr("height", 0)
            .attr("y", HEIGHT)
            .remove();

        // UPDATE
        rects
            .transition()
            .duration(500)
            .attr("x", (d) => x(d.launch_year))
            .attr("y", (d) => y(d.count))
            .attr("width", x.bandwidth)
            .attr("height", (d, i) => HEIGHT - y(d.count));

        // ENTER
        rects
            .enter()
            .append("rect")
            .attr("x", (d) => x(d.launch_year))
            .attr("width", x.bandwidth)
            .attr("fill", "#DCDCDC")
            .attr("y", HEIGHT)
            .transition()
            .duration(500)
            .attr("height", (d, i) => HEIGHT - y(d.count))
            .attr("y", (d) => y(d.count));
    }
}