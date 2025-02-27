export default function ReleaseYear(releaseYear: string): string {
  const currentYear = new Date().getFullYear().toString();

  if (releaseYear > currentYear) {
    return currentYear;
  } else {
    return currentYear === releaseYear
      ? `${currentYear}`
      : `${releaseYear} - ${currentYear}`;
  }
}
