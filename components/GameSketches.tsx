import Svg, { Path } from 'react-native-svg';
import { color } from './../theme';

// Схематычныя малюнкі двух рэжымаў для кнопак на галоўным экране.
// Абрысы наўмысна крывыя - як бы нарысаваныя.

const viewBoxWidth = 120;
const viewBoxHeight = 96;

const stroke = color.inkFaint;
const answerStroke = color.brand;

// Дэтэрмінаваны дрыжык: тыя самыя лічбы пры кожным рэндэры, каб абрысы не скакалі.
function wobble(seed: number, index: number): number {
  const value = Math.sin(seed * 12.9898 + index * 78.233) * 43758.5453;
  return (value - Math.floor(value)) * 2 - 1;
}

// Чатырохкутнік ледзь выгнутымі бакамі, у якога апошні рог крыху пераходзіць за пачатак.
function sketchRect(x: number, y: number, width: number, height: number, seed: number): string {
  const w = (index: number) => wobble(seed, index) * 1.3;
  const p = (value: number) => value.toFixed(1);

  const x0 = x + w(0), y0 = y + w(1);
  const x1 = x + width + w(2), y1 = y + w(3);
  const x2 = x + width + w(4), y2 = y + height + w(5);
  const x3 = x + w(6), y3 = y + height + w(7);

  return `M ${p(x0)} ${p(y0)}`
    + ` Q ${p((x0 + x1) / 2 + w(8))} ${p((y0 + y1) / 2 - 1.1)} ${p(x1)} ${p(y1)}`
    + ` Q ${p((x1 + x2) / 2 + 1.1)} ${p((y1 + y2) / 2 + w(9))} ${p(x2)} ${p(y2)}`
    + ` Q ${p((x2 + x3) / 2 + w(10))} ${p((y2 + y3) / 2 + 1.1)} ${p(x3)} ${p(y3)}`
    + ` Q ${p((x3 + x0) / 2 - 1.1)} ${p((y3 + y0) / 2 + w(11))} ${p(x0 + w(12))} ${p(y0 - 1.6)}`;
}

// Радок тэксту - проста крывая рыска.
function sketchLine(x: number, y: number, width: number, seed: number): string {
  const w = (index: number) => wobble(seed, index) * 0.9;
  const p = (value: number) => value.toFixed(1);

  return `M ${p(x)} ${p(y + w(0))}`
    + ` Q ${p(x + width * 0.3)} ${p(y + w(1) - 1.1)} ${p(x + width * 0.55)} ${p(y + w(2))}`
    + ` Q ${p(x + width * 0.8)} ${p(y + w(3) + 1.1)} ${p(x + width)} ${p(y + w(4))}`;
}

// Якая з шасьці пліткі - "правільная". Абедзве схемы паказваюць на адным месцы.
const answerIndex = 3;

const columns = [24, 64];
const rows = [22, 48.5, 75];
const tileWidth = 32;
const tileHeight = 19;

// Слова зьверху, шэсьць малюнкаў пад ім - 2 на 3, як у самой гульні ў партрэце.
export const ImageChoiceSketch = ({ size }: { size: number }) => (
  <Svg width={size} height={size * viewBoxHeight / viewBoxWidth} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
    <Path d={sketchLine(38, 8, 44, 1)} stroke={stroke} strokeWidth={3} strokeLinecap="round" fill="none" />
    {rows.map((y, row) => columns.map((x, column) => {
      const index = row * columns.length + column;
      const isAnswer = index === answerIndex;
      return (
        <Path
          key={index}
          d={sketchRect(x, y, tileWidth, tileHeight, index + 2)}
          stroke={isAnswer ? answerStroke : stroke}
          strokeWidth={isAnswer ? 2.6 : 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none" />
      );
    }))}
  </Svg>
);

// Рыскі рознай даўжыні, пасярэдзіне - каб чыталіся як словы, а не як лінаваная папера.
const wordRowWidth = [70, 46, 78, 54, 64, 44];
const wordRowTop = 38;
const wordRowStep = 11;

// Малюнак зьверху, шэсьць словаў пад ім - слупком, як у самой гульні.
export const WordChoiceSketch = ({ size }: { size: number }) => (
  <Svg width={size} height={size * viewBoxHeight / viewBoxWidth} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
    <Path
      d={sketchRect(42, 2, 36, 24, 9)}
      stroke={stroke}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none" />
    {wordRowWidth.map((width, index) => {
      const isAnswer = index === answerIndex;
      return (
        <Path
          key={index}
          d={sketchLine(viewBoxWidth / 2 - width / 2, wordRowTop + index * wordRowStep, width, index + 10)}
          stroke={isAnswer ? answerStroke : stroke}
          strokeWidth={isAnswer ? 3 : 2.2}
          strokeLinecap="round"
          fill="none" />
      );
    })}
  </Svg>
);
