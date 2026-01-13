import { accentBlue } from "../utils/styles";

export default function Filters({ selectedRegion, setSelectedRegion }) {
  return (
    <div style={{ margin: "12px 0" }}>
      <label>
        Region:{" "}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          style={{
            marginLeft: "6px",
            padding: "4px 8px",
            borderRadius: "6px",
            border: `1px solid ${accentBlue}`,
          }}
        >
          <option value="All">All</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Latin America">Latin America</option>
        </select>
      </label>
    </div>
  );
}
