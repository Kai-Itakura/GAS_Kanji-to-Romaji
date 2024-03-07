import { GOO_LAB_API_KEY, GOO_LAB_URL } from './def';

const convertSentence = (outputType: string, sentence: string) => {
  const payload: GoogleAppsScript.URL_Fetch.Payload = {
    app_id: GOO_LAB_API_KEY,
    output_type: outputType,
    sentence,
  };

  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    payload,
  };

  try {
    const res = UrlFetchApp.fetch(GOO_LAB_URL, options);
    return res.getContentText();
  } catch (error) {
    console.error('🚀 ~ convertSentence ~ error:', error);
  }
};

export default convertSentence;
