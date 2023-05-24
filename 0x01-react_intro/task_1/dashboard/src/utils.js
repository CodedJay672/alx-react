export function getFullYear() {
  const year = new Date().getFullYear();
  return year;
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  }
  
  return "Holberton School main dashboard";
}