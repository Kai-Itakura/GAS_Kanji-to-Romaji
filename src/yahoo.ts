import { YAHOO_API_KEY, YAHOO_URL } from './def';

const convertText = (text: string) => {
  const url = `${YAHOO_URL}?appid=${YAHOO_API_KEY}`;

  const payload: GoogleAppsScript.URL_Fetch.Payload = {
    id: 'address',
    jsonrpc: '2.0',
    method: 'jlp.maservice.parse',
    params: { q: text },
  };

  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  };

  try {
    const res = UrlFetchApp.fetch(url, options);
    console.log('🚀 ~ convertText ~ res:', res.getContentText());
    return res.getContent();
  } catch (error) {
    console.error('🚀 ~ convertText ~ error:', error);
  }
};

const main = () => {
  // convertText('河野竜輝');
  // convertText('板倉海');
  // convertText('曽根妃実加');
  // convertText('竹中千乃');
  // convertText('山本武');
  convertText('大阪府大阪市淀川区東三国6-17-25 ラグゼ東三国 805');
};

(global as any).main = main;
