import React, { useCallback, useState } from "react";
import "./App.css";
import { DOMMessage, DOMMessageResponse } from "./types";
import { MemClient } from "@mem-labs/mem-node";
import MDEditor from "@uiw/react-md-editor";
import { Button, Form } from "react-bootstrap";

function App() {
  const [content, setContent] = useState<string | undefined>("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState<RegExpMatchArray[]>([]);
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey") || "");
  const [memClient, setMemClient] = useState<MemClient>();

  const createMemClient = useCallback(() => {
    const client = new MemClient({
      apiAccessToken: apiKey,
    });
    setMemClient(client);
    localStorage.setItem("apiKey", apiKey);
  }, [apiKey]);

  const createMem = () => {
    if (memClient) {
      memClient.createMem({
        content: content || "",
      });
    }
    // stores the mem locally for future reference
    localStorage.setItem(url, JSON.stringify(content));
  };

  React.useEffect(() => {
    if (localStorage.getItem("apiKey")) {
      createMemClient();
    }

    // queries for the correct tab to send messages to
    chrome.tabs &&
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          // sends a message to get the URL and contents of the page
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            { type: "GET_DOM" } as DOMMessage,
            (response: DOMMessageResponse) => {
              setUrl(response.url);
              setContent(
                localStorage.getItem(response.url)?.slice(1, -1) ||
                  response.content
              );
            }
          );
        }
      );
  }, [createMemClient]);

  // regex to separate out tags
  const tagRegex = /\B(?<!#)(#[a-zA-Z0-9_]+\b)/g;

  return (
    <div className="App">
      <div className="titlebar">
        <h1>Mem Chrome Extension</h1>
        {memClient && (
          <Button variant="danger" onClick={createMem}>
            Add to Mem
          </Button>
        )}
      </div>

      {memClient ? (
        <>
          <div className="editor">
            <MDEditor
              value={content}
              onChange={(val) => {
                const match = Array.from(val!.matchAll(tagRegex));
                setContent(val);
                setTags(match);
              }}
              className="markdown"
            />
          </div>

          <div className="tags">
            {tags?.map((val) => {
              const hashtag = val[0];
              const tag = val[0].slice(1);
              return (
                <Button
                  size="sm"
                  href={`https://mem.ai/s?filter=%7B%22type%22%3A%22HasTag%22%2C%22tag%22%3A%22${tag.toLowerCase()}%22%2C%22displayName%22%3A%22${tag}%22%7D`}
                  target="_blank"
                >
                  {hashtag}
                </Button>
              );
            })}
          </div>
        </>
      ) : (
        // if API key is not yet defined
        <div className="form">
          <div className="key">
            <Form.Label>API Key</Form.Label>
            <Form.Control onChange={(e) => setApiKey(e.target.value)} />
          </div>
          <Button onClick={createMemClient} className="float-end">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
