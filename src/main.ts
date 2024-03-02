import * as kuromoji from 'kuromoji';
import { toRomaji } from 'wanakana';

// トークナイザーのビルド
function buildTokenizer() {
  return new Promise<kuromoji.Tokenizer<kuromoji.IpadicFeatures>>((resolve, reject) => {
    kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, tokenizer) => {
      if (err) {
        reject(err);
      } else {
        resolve(tokenizer);
      }
    });
  });
}

async function main() {
  // トークナイザーのビルド
  const tokenizer = await buildTokenizer();

  // const text = '大阪府大阪市淀川区東三国6-17-25ラグゼ東三国I805';
  const text = '河野竜輝';

  const tokens = tokenizer.tokenize(text);
  console.log('🚀 ~ main ~ tokens:', tokens);

  // const textGroup = tokens.map((token, index, tokens) => {
  //   const isPlaceName = token.pos_detail_1 === '固有名詞' && token.pos_detail_2 === '地域';
  //   const isSuffix = tokens[index + 1].pos_detail_1 === '接尾' && tokens[index + 1].pos_detail_2 === '地域';
  //   // 地域名と地域の接尾を繋げる
  //   if (isPlaceName && isSuffix && token.reading) {
  //     token.reading += tokens[index + 1].reading;
  //   }
  // });

  /**
   * トークンを意味のある単位にグループ化
   */
  function mergeAdjacentTokens(tokens: kuromoji.IpadicFeatures[]): kuromoji.IpadicFeatures[][] {
    const mergedArray: kuromoji.IpadicFeatures[][] = [];
    let prevTokens: kuromoji.IpadicFeatures[] = [tokens[0]];
    for (let i = 1; i < tokens.length; i++) {
      const isPlaceName = tokens[i - 1].pos_detail_1 === '固有名詞' && tokens[i - 1].pos_detail_2 === '地域';
      const isSuffix = tokens[i].pos_detail_1 === '接尾' && tokens[i].pos_detail_2 === '地域';
      if (isPlaceName && isSuffix) {
        console.log('TRUE');
        prevTokens.push(tokens[i]);
      } else {
        mergedArray.push(prevTokens);
        prevTokens = [tokens[i]];
      }
    }
    return mergedArray;
  }

  const textGroups = mergeAdjacentTokens(tokens);
  // console.log('🚀 ~ main ~ textGroups:', textGroups);

  // const hepburn = toRomaji(katakana);
  // console.log('🚀 ~ main ~ hepburn:', hepburn);
}

main();
