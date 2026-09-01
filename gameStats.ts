import AsyncStorage from '@react-native-async-storage/async-storage';

// Статыстыка адной гульні. Кожны рэжым трымае сваю асобна
export interface GameStats {
  version: number;
  runsCompleted: number;
  attemptClicks: number;
  successClicks: number;
  seenWords: string[];
  perfectedWords: string[];
}

const version = 1;

// A plain interface, not a class: JSON.parse strips prototypes anyway.
export function createStatsStore(key: string) {

  const defaultStats = (): GameStats => ({
    version,
    runsCompleted: 0,
    attemptClicks: 0,
    successClicks: 0,
    seenWords: [],
    perfectedWords: [],
  });

  // Усё, што чытаецца са сховішча, праходзіць праз normalize: getStats() ніколі ня мусіць вярнуць undefined, інакш кожны экран падае на першым чытаньні.
  function normalize(raw: string | null): GameStats {
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

  let currentStats: GameStats;

  const initializationPromise = AsyncStorage
    .getItem(key)
    .then(
      stats => { currentStats = normalize(stats); },
      () => { currentStats = defaultStats(); });

  function getStats() { return currentStats; }

  function copyStats(stats: GameStats): GameStats {
    return { ...stats, seenWords: [...stats.seenWords], perfectedWords: [...stats.perfectedWords] };
  }

  function mutateStats(mutator: (stats: GameStats) => GameStats) {
    const stateSnapshot = currentStats = mutator(currentStats);
    AsyncStorage.setItem(key, JSON.stringify(stateSnapshot)).catch(() => { });
  }

  return {
    initializationPromise,
    getStats,
    copyStats,
    mutateStats,
  };
}
