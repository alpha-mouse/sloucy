// This file is not about the app itself but rather about building vocabulary.md

import { fullVocabulary, TextStyle  } from "../imageSelection/vocabulary";
import * as fs from 'fs';

// I'm stupefied by how file writing works in this bloody node

let content = '# Слоўнік\n\n'

fullVocabulary.forEach(item => {
  const heading = item.entry.heading.map(x => x.style === TextStyle.regular ? x.text : `_${x.text}_`).join('');
  content += `**${heading}**  \n`;
  if (item.isEnabled) {
    item.images.forEach((image: string) => {
      const imageName = image.match(/([^/]+)\.\w+$/)[1];
      content += `<img src="${image.replace('../', '')}" width="200" height="200" alt="${imageName}" /> `;
    });
    content += '\n';
  } else {
    content += item.comment + '\n';
  }
  content += '\n';
});



fs.writeFile('vocabulary.md', content, 'utf8', () => { });
