function electMany<T>(array: T[], count: number): T[] {
  if (array.length < count) {
    throw Error(`Cannot elect ${count} out of ${array.length}`);
  }
  const indices: number[] = [];
  while (indices.length !== count) {
    const candidate = getRandomInt(array.length);
    if (!indices.includes(candidate)) {
      indices.push(candidate);
    }
  }
  return indices.map(i => array[i]);
}

function electManyExceptFor<T>(array: T[], exclusion: T[], count: number): T[] {
  if (array.length < count) {
    throw Error(`Cannot elect ${count} out of ${array.length}`);
  }
  const result: T[] = [];
  while (result.length !== count) {
    const candidateIndex = getRandomInt(array.length);
    var candidate = array[candidateIndex];
    if (!result.includes(candidate) && !exclusion.includes(candidate)) {
      result.push(candidate);
    }
  }
  return result;
}

function electOne<T>(array: T[]): T {
  return array[getRandomInt(array.length)];
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function randomInsert<T>(array: T[], element: T): void {
  const index = getRandomInt(array.length + 1);
  array.splice(index, 0, element);
}

export {
  electMany,
  electManyExceptFor,
  electOne,
  getRandomInt,
  randomInsert,
};
