import Head from "next/head";
import Message from "../components/Message";
import Loading from "../components/Loading";

import shuffle from "../lib/shuffle";

import fetch from "isomorphic-unfetch";
import config from "../config.json";
import { useEffect, useRef, useState } from "react";

function fetcher(url) {
  return new Promise((resolve, reject) => {
    return fetch(url)
      .then((r) => r.json())
      .then((json) => {
        if (!json.ok) {
          return reject("Internal Server Error");
        }

        return resolve(json);
      })
      .catch(reject);
  });
}

export default function Home() {
  const [messages, setMessages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMessage, setActiveMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isErrored, setIsErrored] = useState(false);

  const buttonRef = useRef(null);

  function bootstrap() {
    refreshMessages();
    registerEventHandlers();

    return destroy;
  }

  function destroy() {
    unregisterEventHandlers();
  }

  function registerEventHandlers() {
    window.addEventListener("keydown", handleKeyDown);
  }

  function unregisterEventHandlers() {
    window.removeEventListener("keydown", handleKeyDown);
  }

  async function refreshMessages() {
    setLoading(true);
    setActiveIndex(0);
    setActiveMessage(null);
    setMessages(null);
    setIsErrored(false);

    try {
      const res = await fetcher("/api/all");

      const shuffledMessages = shuffle(res.messages);
      setMessages(shuffledMessages);
    } catch (err) {
      setActiveMessage({
        header: "Nem sikerült betölteni az üzenetet.",
        comment: "Kérlek próbáld újra később.",
      });
      setIsErrored(true);

      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(bootstrap, []);

  useEffect(() => {
    if (messages) {
      setActiveMessage(messages[activeIndex]);
    }
  }, [activeIndex, messages]);

  function next() {
    setLoading(true);

    setTimeout(() => {
      if (activeIndex + 1 < messages.length) {
        setActiveIndex(activeIndex + 1);
      } else {
        setMessages(shuffle(messages));
        setActiveIndex(0);
      }

      setLoading(false);
    }, 200); // lol
  }

  function handleKeyDown(e) {
    // enter
    if (e.keyCode === 13 && buttonRef.current !== null) {
      buttonRef.current.click();
    }
  }

  return (
    <div className="wrapper">
      <Head>
        <title>{config.app.name}</title>
      </Head>

      {loading && <Loading />}

      {!loading && activeMessage && (
        <Message message={activeMessage} error={isErrored} />
      )}

      <div className="more-link">
        <button ref={buttonRef} onClick={next} disabled={loading}>
          <span>Kérek még!</span>
        </button>
      </div>
    </div>
  );
}
