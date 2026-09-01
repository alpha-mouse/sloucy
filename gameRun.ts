import vocabulary, { VocabularyItem } from './vocabulary';
import { electManyWeighted, electManyExceptFor, randomInsert } from './randomization';
import type { GameStats } from './gameStats';

export interface Question {
  set: VocabularyItem[];
  answer: VocabularyItem;
}

// Абодва рэжымы будуюць забег аднолькава: выбраць адказы паводле вагі, дабраць да іх памылковыя, што ня блытаюцца з адказам, ды ўставіць адказ на выпадковае месца.
// Рознае толькі тое, што потым да пытаньня дадаецца - малюнкі ці адзін малюнак.
export function generateQuestions(
  stats: Pick<GameStats, 'seenWords' | 'perfectedWords'>,
  questionsNumber: number,
  optionsNumber: number,
): Question[] {
  const answers = electManyWeighted(vocabulary, vocabularyItemWeight, questionsNumber);
  return answers.map(answer => {
    const set = electManyExceptFor(vocabulary, exclusionChecker(answer), optionsNumber - 1);
    randomInsert(set, answer);
    return { set, answer };
  });

  function vocabularyItemWeight(item: VocabularyItem): number {
    // show less of perfected words
    if (stats.perfectedWords.includes(item.key))
      return 1;
    // but a bit more of attempted but not perfected ones
    if (stats.seenWords.includes(item.key))
      return 3;
    return 2;
  }

  function exclusionChecker(answer: VocabularyItem): (takenItems: VocabularyItem[], item: VocabularyItem) => boolean {
    const answerWords = [answer.canonical];
    answerWords.push(...(answer.exclusion || []));
    return (takenItems: VocabularyItem[], item: VocabularyItem) => {
      if (takenItems.includes(item))
        return false;
      if (answerWords.includes(item.canonical))
        return false;
      if (item.exclusion) {
        for (const word of item.exclusion) {
          if (answerWords.includes(word))
            return false;
        }
      }
      return true;
    }
  }
}
