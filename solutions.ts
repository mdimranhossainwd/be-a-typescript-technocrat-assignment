// formatValue input based value

function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

// getLength form value to converted their length
function getLength(value: string | unknown[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

console.log(getLength("type script"));
console.log(getLength([10, 20, 30, 40]));
