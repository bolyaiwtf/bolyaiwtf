import useSWR, { mutate } from 'swr';

import Head from 'next/head';
import Message from '../components/Message';
import Loading from '../components/Loading';

import fetch from 'isomorphic-unfetch';
import config from '../config.json';

function fetcher(url) {
  return new Promise((resolve, reject) => {
    return fetch(url)
      .then(r => r.json())
      .then(json => {
        if (!json.ok) {
          return reject('Internal Server Error');
        }

        return resolve(json);
      })
      .catch(reject);
  });
}

export default function Home() {
  let { data, error } = useSWR('/api/message', fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  let message = data?.message;

  if (error) {
    message = {
      header: 'Nem sikerült betölteni az üzenetet.',
      comment: 'Kérlek próbáld újra később.'
    };

    console.error(error);
  }

  function reload() {
    // workaround for temporarily mutating the data to a null state
    mutate('/api/message', () => null);
  }

  return (
    <div className="wrapper">
      <Head>
        <title>{config.app.name}</title>
      </Head>

      { (data || error) ? <Message
        message={message}
        error={!!error}
      /> : <Loading /> }

      <div className="more-link">
        <button
          onClick={reload}
          disabled={!data}
        >
          <i className="fa fa-refresh"></i>
          <span>Kérek még!</span>
        </button>
      </div>
    </div>
  );
}
