// Shared by all archive bodies, formulas, and reference previews. Numerical
// values and percentage signs stay unchanged; only the redundant unit is removed.
export function concisePercentageUnits(text: string) {
  return text.replace(/超过 (\d+(?:\.\d+)?)% 的百分点/g, "超出 $1% 的差值")
    .replace(/百分点数/g, "数值")
    .replace(/[ \t]*个?百分点/g, "");
}
