export const converter = (_obj) => {
  const obj = {};
  for (const prefix of Object.keys(_obj)) {
    for (const [name, value] of Object.entries(_obj[prefix])) {
      Object.defineProperty(obj, `${prefix}_${name}`, {
        value,
        enumerable: true,
        writable: true,
      });
    }
  }

  return obj;
};
