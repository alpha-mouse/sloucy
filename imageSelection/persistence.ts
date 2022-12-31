import AsyncStorage from '@react-native-async-storage/async-storage';

export class ImageSelectionGameStats {
  static fromOther(other: ImageSelectionGameStats) {
    const result = new ImageSelectionGameStats();
    result.runsCompleted = other.runsCompleted;
    result.attemptClicks = other.attemptClicks;
    result.successClicks = other.successClicks;
    result.seenWords = [...other.seenWords];
    result.perfectedWords = [...other.perfectedWords];
    return result;
  }

  version = 1;
  runsCompleted = 0;
  attemptClicks = 0;
  successClicks = 0;
  seenWords: String[] = [];
  perfectedWords: String[] = [];
}

const defaultStats = new ImageSelectionGameStats();

const key = 'ImageSelectionStats';

let currentStats: ImageSelectionGameStats;

const initializationPromise = AsyncStorage
  .getItem(key)
  .then(stats => {
    currentStats = stats ? JSON.parse(stats) : defaultStats
    return;
  }, () => defaultStats);

function getStats() { return currentStats; }

function mutateStats(mutator: (stats: ImageSelectionGameStats) => ImageSelectionGameStats) {
  const stateSnapshot = currentStats = mutator(currentStats);
  AsyncStorage.setItem(key, JSON.stringify(stateSnapshot))
}

export {
  initializationPromise,
  getStats,
  mutateStats,
}