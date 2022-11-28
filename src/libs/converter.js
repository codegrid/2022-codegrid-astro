export const converter = (obj, prefix = "") => {
  let result = {};
  let resultKey = prefix;
  for (const [key, value] of Object.entries(obj)) {
    resultKey = prefix ? `${prefix}_${key}` : key;
    if (value !== null && typeof value === "object") {
      Object.assign(result, converter(value, resultKey));
    } else {
      result[resultKey] = value;
    }
  }
  return result;
};
