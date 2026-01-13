import { cardStyle, mutedText, cellStyle } from "../utils/styles";

export default function HeatTable({ titles, regions, completionLookup }) {
  return (
    <div style={{ ...cardStyle, marginTop: "16px" }}>
      <h3 style={{ marginTop: 0 }}>Avg Completion Rate (Heat Table)</h3>
      <p style={{ color: mutedText, marginTop: "-6px" }}>
        Darker cells indicate higher completion rates.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "700px" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #e5e7eb" }}>
                Title
              </th>
              {regions.map((r) => (
                <th key={r} style={{ textAlign: "center", padding: "10px", borderBottom: "1px solid #e5e7eb" }}>
                  {r}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {titles.map((t) => (
              <tr key={t}>
                <td style={{ padding: "10px", borderBottom: "1px solid #f1f5f9" }}>{t}</td>

                {regions.map((r) => {
                  const val = completionLookup[t][r];
                  return (
                    <td
                      key={r}
                      style={{
                        padding: "10px",
                        textAlign: "center",
                        borderBottom: "1px solid #f1f5f9",
                        borderLeft: "1px solid #f1f5f9",
                        ...cellStyle(val),
                      }}
                    >
                      {val == null ? "—" : `${Math.round(val)}%`}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
