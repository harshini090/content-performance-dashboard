import { useEffect, useMemo, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";

import Filters from "./components/Filters";
import ChartCard from "./components/ChartCard";
import HeatTable from "./components/HeatTable";

import { sumByKey, buildCompletionHeatmap } from "./utils/aggregations";
import { accentBlue, mutedText, cardStyle } from "./utils/styles";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");

 useEffect(() => {
  fetch(`${import.meta.env.BASE_URL}contentMetrics.json`)
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => console.error("Failed to load data:", err));
}, []);


  const filteredData = selectedRegion === "All"
    ? data
    : data.filter((d) => d.region === selectedRegion);

  const viewsByRegion = useMemo(() => sumByKey(data, "region", "views"), [data]);
  const watchTimeByGenre = useMemo(
    () => sumByKey(filteredData, "genre", "watchTimeHours"),
    [filteredData]
  );
  const viewsByWeek = useMemo(
    () =>
      sumByKey(filteredData, "week", "views").sort((a, b) =>
        a.key.localeCompare(b.key)
      ),
    [filteredData]
  );

  const { titles, regions, completionLookup } = useMemo(
    () => buildCompletionHeatmap(data),
    [data]
  );

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: accentBlue }}>Content Performance Dashboard</h1>

      <p style={{ color: mutedText }}>
        <strong>Total records:</strong> {data.length}
      </p>

      <Filters selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />

      <h2 style={{ marginTop: "10px" }}>Insights</h2>
      <p style={{ color: mutedText, marginTop: "6px" }}>
        Insight: Watch time highlights sustained engagement, while the trend chart shows how engagement changes week-over-week by region.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <ChartCard title="Watch Time (Hours) by Genre">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={watchTimeByGenre}>
                <XAxis dataKey="key" />
                <YAxis tickFormatter={(v) => `${Math.round(v / 1_000_000)}M`} />
                <Tooltip />
                <Bar dataKey="value" fill={accentBlue} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Views by Week (Trend)">
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={viewsByWeek}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="key" />
                <YAxis tickFormatter={(v) => `${Math.round(v / 1_000_000)}M`} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke={accentBlue} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>

      <div style={{ ...cardStyle, marginTop: "16px" }}>
        <h3 style={{ marginTop: 0 }}>Views by Region</h3>
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={viewsByRegion}>
              <XAxis dataKey="key" />
              <YAxis tickFormatter={(v) => `${Math.round(v / 1_000_000)}M`} />
              <Tooltip />
              <Bar dataKey="value" fill={accentBlue} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <HeatTable titles={titles} regions={regions} completionLookup={completionLookup} />
    </div>
  );
}
