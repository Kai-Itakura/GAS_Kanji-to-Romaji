import { API_KEY, BASE_URL } from './def';

const convertSentence = (outputType: string, sentence: string) => {
  const payload: GoogleAppsScript.URL_Fetch.Payload = {
    app_id: API_KEY,
    output_type: outputType,
    sentence,
  };

  const options: GoogleAppsScript.URL_Fetch.URLFetchRequest = {
    url: BASE_URL,
    method: 'post',
    payload,
  };

  try {
    const res = UrlFetchApp.fetch(BASE_URL, options);
    return res.getContentText();
  } catch (error) {
    console.error('🚀 ~ convertSentence ~ error:', error);
  }
};

export default convertSentence;
