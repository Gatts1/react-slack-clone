import React from "react";
import Main from "./main";
import Login from "./login";

function App({ url }) {
  const ws = React.useRef(null);

  const [connected, setConnected] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  const [username, setUsername] = React.useState(null);

  const [listChannel, setListChannel] = React.useState([
    { name: "general", id: Date.now() }
  ]);

  const [listMessages, setListMessages] = React.useState([]);

  const [indexChannelActive, setIndexChannelActive] = React.useState(0);

  React.useEffect(() => {
    if (username) {
      setIsLogged(true);
    }
  }, [username]);

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
        console.log("open");
        setConnected(true);
      };
      ws.current.onclose = () => {
        console.log("close");
        setConnected(false);
      };
      ws.current.onmessage = ({ data }) => {
        console.log("data", data);
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
    setContent("");
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

  function submitSendMessage(messageContent) {
    setListMessages(
      listMessages.concat({
        id: new Date().toISOString(),
        author: username,
        content: messageContent,
        date: new Date().toISOString()
      })
    );
    ws.current.send(
      JSON.stringify({
        id: new Date().toISOString(),
        author: username,
        content: messageContent,
        date: new Date().toISOString()
      })
    );
  }

  return (
    <>
      {isLogged ? (
        <Main
          submitSendChannel={submitSendChannel}
          listChannel={listChannel}
          submitSendMessage={submitSendMessage}
          listMessages={listMessages}
          username={username}
        />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </>
  );
}

export default App;
