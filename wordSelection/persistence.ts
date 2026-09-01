import { createStatsStore } from './../gameStats';

export const {
  initializationPromise,
  getStats,
  copyStats,
  mutateStats,
} = createStatsStore('WordSelectionStats');
