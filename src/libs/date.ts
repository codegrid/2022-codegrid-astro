type FormatDate = (date: Date) => string;
export const formatDate: FormatDate = (ms) => {
  const date = new Date(ms);
  return date.toLocaleString("ja", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
