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

function electManyExceptFor<T>(array: T[], predicate: ((alreadyTaken: T[], candidate: T) => boolean), count: number): T[] {
  if (array.length < count) {
    throw Error(`Cannot elect ${count} out of ${array.length}`);
  }
  const result: T[] = [];
  while (result.length !== count) {
    const candidateIndex = getRandomInt(array.length);
    var candidate = array[candidateIndex];
    if (predicate(result, candidate)) {
      result.push(candidate);
    }
  }
  return result;
}

function electManyWeighted<T>(array: T[], weight: (item: T) => number, count: number): T[] {
  if (array.length < count) {
    throw Error(`Cannot elect ${count} out of ${array.length}`);
  }
  const weights: number[] = array.map(weight);
  const totalWeight = weights.reduce((x, y) => x + y);
  const indices: number[] = [];
  while (indices.length !== count) {
    const candidateCumulativeWeight = Math.random() * totalWeight;
    let candidate = 0;
    let cumulativeWeight = 0;
    for (let i = 0; i < weights.length; i++) {
      cumulativeWeight += weights[i];
      if (candidateCumulativeWeight < cumulativeWeight) {
        candidate = i;
        break;
      }
    }
    if (!indices.includes(candidate)) {
      indices.push(candidate);
    }
  }
  return indices.map(i => array[i]);
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
  electManyWeighted,
  electOne,
  getRandomInt,
  randomInsert,
};
