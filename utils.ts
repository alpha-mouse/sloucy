function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function electOne<T>(array: T[]): T {
  return array[getRandomInt(array.length)];
}

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

export {
  electMany,
  electOne,
  getRandomInt
};
