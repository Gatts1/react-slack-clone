import React from 'react';
import MessageSend from './MessageSend';
import Main from './main';
import Login from './login';

function App({ url }) {
  const ws = React.useRef(null);

  const [listMessage, setListMessage] = React.useState([]);
  const [content, setContent] = React.useState('');

  const [connected, setConnected] = React.useState(false);

  const [listChannel, setListChannel] = React.useState([
    { name: 'general', id: Date.now() }
  ]);
  const [isLogged, setIsLogged] = React.useState(false);
  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    const server = new WebSocket(url);
    ws.current = server;
    return () => {
      ws.current = null;
      server.close();
    };
  }, [url]);

  React.useEffect(() => {
    if (ws.current) {
      ws.current.onopen = () => {
        console.log('open');
        setConnected(true);
      };
      ws.current.onclose = () => {
        console.log('close');
        setConnected(false);
      };
      ws.current.onmessage = ({ data }) => {
        console.log('data', data);
        //setListMessage(state => state.concat(JSON.parse(data)));
      };
    }
  });

  function handleSubmit(event) {
    event.preventDefault();
    ws.current.send(
      JSON.stringify({
        id: Date.now(),
        content
      })
    );
    setContent('');
  }

  function submitSendChannel(channelName) {
    setListChannel(listChannel.concat({ name: channelName, id: Date.now() }));
    ws.current.send(
      JSON.stringify({
        name: channelName,
        id: Date.now()
      })
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          disabled={!connected}
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <button>Send</button>
      </form>
      <ul>
        {listMessage.map(message => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      {isLogged ? (
        <Main
          submitSendChannel={submitSendChannel}
          listChannel={listChannel}
          username={username}
        />
      ) : (
        <Login setIsLogged={setIsLogged} setUsername={setUsername} />
      )}
      <MessageSend />
    </>
  );
}

export default App;
