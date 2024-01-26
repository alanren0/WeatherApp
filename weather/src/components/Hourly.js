import { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryVoronoiContainer, VictoryLabel, VictoryTooltip, VictoryVoronoi, VictoryScatter } from 'victory';

function Hourly({hourlyInfo}) {

  const [chartData, setChartData] = useState([]);
  const [hourInfo, setHourInfo] = useState({});

  useEffect(() => {
    updateData();
  }, [hourlyInfo]);

  const updateData = () => {
    if (hourlyInfo == undefined) {
      return
    }
    const tempData = []

    for (let i = 0; i < 24; i++) {
      tempData.push({
        x: i,
        y: hourlyInfo[i].temp_c
      });
    }
    console.log(tempData);
    setChartData(tempData);
  }

  return (
    <>
      <VictoryChart 
        domainPadding={{ y: 40 }}
      >
        <VictoryLine
          data={chartData}
        />
        <VictoryScatter data={chartData}
          size={5}
          style={{ data: { fill: "#c43a31" } }}
          labels={({ datum }) => `${datum.x}, ${datum.y}`}
            labelComponent={
              <VictoryTooltip  dy={-7} constrainToVisibleArea />
            }
        />
      </VictoryChart>
    </>
    
  )
}

export default Hourly;