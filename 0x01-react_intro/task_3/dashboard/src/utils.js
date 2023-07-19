export function getFullYear() {
  const year = new Date().getFullYear();
  return year;
}

export function getFooterCopy(isIndex) {
  return (isIndex) ? "Holberton School" : "Holberton School main dashboard";
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}