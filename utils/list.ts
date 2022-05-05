type Comparable = number | string;
type CompareOut = -1 | 0 | 1;
function compare(a: number, b: number): CompareOut;
function compare(a: string, b: string): CompareOut;
function compare(a: Comparable, b: Comparable): CompareOut {
  return a === b ? 0 : a > b ? 1 : -1;
}

export function sortArrayInPlace<T>(arr: T[], cb: ((obj: T) => number)): void;
export function sortArrayInPlace<T>(arr: T[], cb: ((obj: T) => string)): void;
export function sortArrayInPlace<T>(arr: T[], cb: ((obj: T) => any)): void {
  arr.sort((a, b) => compare(cb(a), cb(b)));
}

export function sortArrayOfObjects<T>(arr: T[], cb: ((obj: T) => number)): T[];
export function sortArrayOfObjects<T>(arr: T[], cb: ((obj: T) => string)): T[];
export function sortArrayOfObjects<T>(arr: T[], cb: ((obj: T) => any)): T[] {
  const sorted = arr.concat();
  sortArrayInPlace(sorted, cb);
  return sorted;
}

export function sortArray(arr: number[]): number[];
export function sortArray(arr: string[]): string[];
export function sortArray(arr: any[]): any[] {
  return sortArrayOfObjects(arr, elm => elm);
}

export function getNextInArray<T>(
  elm: T,
  arr: T[],
  matcher?: (a: T, b: T) => boolean,
): T {
  const matchingElm = matcher
    ? arr.filter((e) => matcher(e, elm))[0]
    : undefined;
  const index = arr.indexOf(matchingElm ?? elm);
  const newIndex = (arr.length + index + 1) % arr.length;
  return arr[newIndex];
}
