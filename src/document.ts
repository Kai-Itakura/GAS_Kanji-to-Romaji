import convertSentence from './gooLab';

const manipulateDocument = () => {
  const doc = DocumentApp.getActiveDocument();
  console.log('🚀 ~ manipulateDocument ~ doc:', doc);
  const res = convertSentence('hiragana', '大阪市北区大淀中3-11-32-806\n河野竜輝');
  console.log('🚀 ~ manipulateDocument ~ res:', res);
};

(global as any).manipulateDocument = manipulateDocument;
