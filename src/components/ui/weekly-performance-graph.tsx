import React from "react";
import { View, StyleSheet } from "react-native";
import { CartesianChart, Area, Line } from "victory-native";
import { useTheme } from "@/src/features/theme/theme-hooks";
import { P } from "./Elements";
import ActivityIcon from "@/assets/icons/activity-icon";
import IconWrapper from "./icon-wrapper";

export default function WeeklyPerformanceGraph() {
  const theme = useTheme((state) => state.theme);
  const title = "Weekly activities"
  const data = [
    { day: "Mon", y: 20 },
    { day: "Tue", y: 70 },
    { day: "Wed", y: 40 },
    { day: "Thu", y: 95 },
    { day: "Fri", y: 20 },
    { day: "Sat", y: 70 },
    { day: "Sun", y: 40 },
  ];

  const height = 220

  return (
    <View style={[styles.container, { height, backgroundColor: theme.accents }]}>

      <View style={styles.innerContainer}>
        <IconWrapper isFeedback={false}>
          <ActivityIcon />
        </IconWrapper>
        <P style={[styles.title, { color: theme.text }]}>{title}</P>
      </View>

      <CartesianChart
        data={data}
        xKey="day"
        yKeys={["y"]}
        domainPadding={{ top: 1, bottom: 1 }}
      >
        {({ points, chartBounds }) => (
          <>
            <Area
              curveType="bumpX"
              points={points.y}
              y0={chartBounds.bottom}
              color={theme.primary}
              opacity={0.5}
              animate={{ type: "timing", duration: 800 }}
            />
            <Line
              points={points.y}
              color={theme.foreground}
              curveType="bumpX"
              strokeWidth={2}
              animate={{ type: "timing", duration: 800 }}
            />
          </>
        )}


      </CartesianChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 16,
    overflow: "hidden",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
});
