export const converter = (_obj) => {
  const obj = {};
  for (const prefix of Object.keys(_obj)) {
    for (const [name, value] of Object.entries(_obj[prefix])) {
      obj[`${prefix}_${name}`] = value;
    }
  }

  return obj;
};
