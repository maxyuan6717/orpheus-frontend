import { ResponsiveLine } from "@nivo/line";

const refsLayer = (props) => {
  return props.inputs.map((val, index) =>
    val ? (
      <g key={index}>
        <rect
          y={-10}
          x={props.xScale(val) - 1}
          width={2}
          height={props.yScale(0) + 10}
          fill="rgba(255,0,0,.5)"
        />
      </g>
    ) : null
  );
};

const SurveyGraph = ({ data, value, variable, barHeight }) => {
  return (
    <ResponsiveLine
      colors={{ scheme: "set1" }}
      inputs={[value]}
      barHeight={barHeight}
      data={[
        {
          id: "you",
          color: "black",
          data: data.map((val, index) => ({
            x: val.x,
            y: val.x <= value ? val.y : null,
          })),
        },
        { id: "gumbel", data: data },
      ]}
      margin={{ top: 5, right: 20, bottom: 50, left: 20 }}
      xScale={{ type: "linear" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        format: (val) => {
          return (val / 0.25) % 4 === 0 ? val : "";
        },
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: variable,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={null}
      enablePoints={false}
      useMesh={true}
      enableGridX={false}
      enableGridY={true}
      enableArea={true}
      // areaOpacity={1}
      enableSlices="x"
      layers={[
        "grid",
        refsLayer,
        "markers",
        "axes",
        "areas",
        "lines",
        "slices",
        "dots",
        "legends",
        "mesh",
        "legends",
        "points",
        "crosshair",
      ]}
      sliceTooltip={({ slice }) => {
        console.log(slice.points);
        return (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
              zIndex: "420 !important",
            }}
          >
            <div style={{ color: "black" }}>
              {variable}: {slice.points[0].data.xFormatted}
            </div>
            <div
              style={{
                // color: slice.points[0].serieColor,
                color: "black",
              }}
            >
              <strong>Percentile:</strong>
              {"  " + (slice.points[0].data.cdf * 100).toFixed(1)}%
            </div>
          </div>
        );
      }}
    />
  );
};

export default SurveyGraph;
