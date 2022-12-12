export function pluralize(number: number, one?: string, few?: string, many?:string): string | undefined {
  // ain't Belarusian fun?
  if (number === 0)
    return many;
  if (number === 1)
    return one;
  if (number < 5)
    return few;
  if (number < 21)
    return many;
  if (number % 10 === 1 && number % 100 !== 11)
    return one;
  if (number % 10 < 5 && (number % 100 < 10  || 20 < number % 100))
    return few;
  return many;
}