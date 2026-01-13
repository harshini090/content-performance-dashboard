export function sumByKey(rows, groupKey, valueKey) {
  const map = {};
  for (const r of rows) {
    const k = r[groupKey] ?? "Unknown";
    map[k] = (map[k] ?? 0) + (Number(r[valueKey]) || 0);
  }
  return Object.entries(map)
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => b.value - a.value);
}

export function buildCompletionHeatmap(rows) {
  const titles = [...new Set(rows.map((d) => d.title))].sort();
  const regions = [...new Set(rows.map((d) => d.region))].sort();

  const completionLookup = {};
  for (const t of titles) completionLookup[t] = {};

  for (const row of rows) {
    const t = row.title;
    const r = row.region;
    const v = Number(row.completionRate) || 0;

    if (!completionLookup[t][r]) completionLookup[t][r] = { sum: 0, count: 0 };
    completionLookup[t][r].sum += v;
    completionLookup[t][r].count += 1;
  }

  for (const t of titles) {
    for (const r of regions) {
      const cell = completionLookup[t][r];
      completionLookup[t][r] = cell ? cell.sum / cell.count : null;
    }
  }

  return { titles, regions, completionLookup };
}
