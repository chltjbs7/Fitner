import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const data = {
  labels: ["오전12시", "6시", "오후 12시", "6시"],
  //legend: ["L1", "L2", "L3"],
  data: [
    [0], [0], [40], [0]
  ],
  barColors: ["#8ad3c0"]
};

const Chart = () => {
  return (
    <View>
      <Text style={styles.time}>Time</Text>
      <StackedBarChart
        data={data}
        width={370}
        height={250}
        //yAxisLabel="$"
        //yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          //decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 0) => `rgba(170, 170, 170, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(170, 170, 170, ${opacity})`,
          style: {},
          barRadius : 7,
          barPercentage: 1,
        }}
        bezier
        style={{
          //marginVertical: 5,
          //marginHorizontal: 5,
          marginStart: 27,
          borderRadius: 30
        }}
      />
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  time: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: "#9b90ee",
    marginLeft: 31,
  },
})