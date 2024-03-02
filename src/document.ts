import convertSentence from './gooLab';

const manipulateDocument = () => {
  const doc = DocumentApp.getActiveDocument();
  console.log('🚀 ~ manipulateDocument ~ doc:', doc);
  const res = convertSentence('hiragana', '大阪府大阪市淀川区東三国6-17-25 ラグゼ東三国 805号');
  console.log('🚀 ~ manipulateDocument ~ res:', res);
};

(global as any).manipulateDocument = manipulateDocument;
