import { createStatsStore } from './../gameStats';

// Ключ і version мяняць нельга - гэты запіс ужо ляжыць на прыладах карыстальнікаў.
export const {
  initializationPromise,
  getStats,
  copyStats,
  mutateStats,
} = createStatsStore('ImageSelectionStats');
