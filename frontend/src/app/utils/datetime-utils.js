export function getOrdinalDay(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return day + getOrdinalSuffix(day);
}
