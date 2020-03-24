import Message from '../components/Message';

import Head from 'next/head';

export default function NotFound () {
  const message = {
    header: 'wtf',
    comment: 'page not found'
  };

  return (
    <div className="wrapper">
      <Head>
        <title>404</title>
      </Head>

      <Message message={message} error={true} />
    </div>
  );
}
