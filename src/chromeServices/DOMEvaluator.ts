import { DOMMessage, DOMMessageResponse } from "../types";

const messagesListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  const title = document.title;
  const url = document.URL;
  const headlines = Array.from(document.getElementsByTagName<"h1">("h1")).map(
    (h1) => h1.innerText
  );
  const content = `# ${title}
${url}

${headlines.map((headline) => {
  return `## ${headline}`;
})}`;

  const response: DOMMessageResponse = {
    title,
    url,
    headlines,
    content,
  };

  sendResponse(response);
};

// listens for messages to be fired
chrome.runtime.onMessage.addListener(messagesListener);
