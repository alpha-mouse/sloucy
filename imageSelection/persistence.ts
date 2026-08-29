import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ImageSelectionGameStats {
  version: number;
  runsCompleted: number;
  attemptClicks: number;
  successClicks: number;
  seenWords: string[];
  perfectedWords: string[];
}

const version = 1;

const key = 'ImageSelectionStats';

const defaultStats = (): ImageSelectionGameStats => ({
  version,
  runsCompleted: 0,
  attemptClicks: 0,
  successClicks: 0,
  seenWords: [],
  perfectedWords: [],
});

function normalize(raw: string | null): ImageSelectionGameStats {
  if (!raw) return defaultStats();
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.version !== version) return defaultStats();
    return {
      ...defaultStats(),
      ...parsed,
      seenWords: Array.isArray(parsed.seenWords) ? parsed.seenWords : [],
      perfectedWords: Array.isArray(parsed.perfectedWords) ? parsed.perfectedWords : [],
    };
  } catch {
    return defaultStats();
  }
}

let currentStats: ImageSelectionGameStats;

const initializationPromise = AsyncStorage
  .getItem(key)
  .then(
    stats => { currentStats = normalize(stats); },
    () => { currentStats = defaultStats(); });

function getStats() { return currentStats; }

function copyStats(stats: ImageSelectionGameStats): ImageSelectionGameStats {
  return { ...stats, seenWords: [...stats.seenWords], perfectedWords: [...stats.perfectedWords] };
}

function mutateStats(mutator: (stats: ImageSelectionGameStats) => ImageSelectionGameStats) {
  const stateSnapshot = currentStats = mutator(currentStats);
  AsyncStorage.setItem(key, JSON.stringify(stateSnapshot)).catch(() => { });
}

export {
  initializationPromise,
  getStats,
  copyStats,
  mutateStats,
}
