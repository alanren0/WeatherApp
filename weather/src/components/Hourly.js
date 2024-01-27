import { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryTooltip, VictoryScatter } from 'victory';

function Hourly({hourlyInfo, unitSystem}) {

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    updateData();
  }, [hourlyInfo]);

  const updateData = () => {
    if (hourlyInfo == undefined) {
      return
    }
    
    const dataC = []
    const dataF = []

    for (let i = 0; i < 24; i++) {
      dataC.push({
        x: i,
        y: hourlyInfo[i].temp_c,
        label: `Time: ${i}:00\nTemp: ${hourlyInfo[i].temp_c}\n${hourlyInfo[i].condition.text}`
      });

      dataF.push({
        x: i,
        y: hourlyInfo[i].temp_f,
        label: `Time: ${i}:00\nTemp: ${hourlyInfo[i].temp_f}\n${hourlyInfo[i].condition.text}`
      });
    }
    setChartData({
      "metric": dataC,
      "imperial": dataF
    });
  }

  return (
    <>
      <div className="graph">
        {chartData && unitSystem &&
          <VictoryChart 
            domainPadding={{ y: 10 }}
          >

            <VictoryLine
              data={chartData[unitSystem]}
              labels={() => {}}
              labelComponent={<VictoryTooltip/>}
            />

            <VictoryScatter 
              data={chartData[unitSystem]}
              size={5}
              style={{ 
                data: { fill: "#c43a31" },
                label: { fontSize: 16}
              }}
              labels={() => {}}
              labelComponent={<VictoryTooltip/>}
            />
          </VictoryChart>
        }
      </div>
    </>
    
  )
}

export default Hourly;