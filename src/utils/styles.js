export const accentBlue = "#2563eb";
export const mutedText = "#6b7280";

export const cardStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "16px",
  background: "white",
};

export function cellStyle(value) {
  if (value == null) return { background: "#f3f4f6", color: "#6b7280" };
  const alpha = Math.min(0.85, Math.max(0.15, value / 100));
  return {
    background: `rgba(0, 0, 0, ${alpha})`,
    color: alpha > 0.5 ? "white" : "black",
    fontWeight: 600,
  };
}
