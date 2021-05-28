import { ResponsiveLine } from "@nivo/line";

const colors = [
  "#e41a1c",
  "#377eb8",
  "#4daf4a",
  "#984ea3",
  "#ff7f00",
  "#ffff33",
  "#a65628",
  "#f781bf",
  "#99999",
];

const refsLayer = (props) => {
  return props.inputs.map((val, index) =>
    val ? (
      <g key={index}>
        <rect
          y={-10}
          x={props.xScale(val) - 1}
          width={2}
          height={props.yScale(0) + 10}
          fill={colors[index]}
        />
      </g>
    ) : null
  );
};

const SurveyGraph = ({ data, value, variable, barHeight }) => {
  return (
    <ResponsiveLine
      colors={{ scheme: "set1" }}
      inputs={value.map((val) => val.val)}
      barHeight={barHeight}
      data={value
        .map((val) => ({
          id: `${val.name} - ${val.cdf}%`,
          data: data.map((val2, index) => ({
            x: val2.x,
            y: val2.x <= val.val ? val2.y : null,
          })),
        }))
        .concat([{ id: "Population", data: data }])}
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
      legends={
        value[0].name
          ? [
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 0,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 100,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : []
      }
      sliceTooltip={({ slice }) => {
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
