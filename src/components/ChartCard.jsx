import { cardStyle } from "../utils/styles";

export default function ChartCard({ title, children }) {
  return (
    <div style={cardStyle}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </div>
  );
}
