import React from "react";
import Main from "./main";
import Login from "./login";

function App({ url }) {
  const ws = React.useRef(null);

  const [connected, setConnected] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  const [username, setUsername] = React.useState(null);

  const [listChannel, setListChannel] = React.useState([
<<<<<<< HEAD
<<<<<<< HEAD
    { id: Date.now(), name: "general", messages: [] }
=======
    { name: "general", id: Date.now() }
>>>>>>> Add property to message object
=======
    { id: Date.now(), name: "general", messages: [] }
>>>>>>> Join a new channel and change amoung them
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  React.useEffect(() => {
    console.log("23");
    setListMessages(listChannel[indexChannelActive]["messages"]);
  }, [indexChannelActive]);

=======
>>>>>>> Add setIndexChannelActive functionality
=======
>>>>>>> Advances
=======
  React.useEffect(() => {
    console.log("23");
    setListMessages(listChannel[indexChannelActive]["messages"]);
  }, [indexChannelActive]);

>>>>>>> Add little useEffect
  function submitSendChannel(channelName) {
    setListChannel(
      listChannel.concat({ id: Date.now(), name: channelName, messages: [] })
    );
    ws.current.send(
      JSON.stringify({
        name: channelName,
        id: Date.now()
      })
    );
  }

  function submitSendMessage(messageContent) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Join a new channel and change amoung them
    let newMessage = {
      id: new Date().toISOString(),
      author: username,
      content: messageContent,
      date: new Date().toISOString()
    };
    setListMessages(listMessages.concat(newMessage));
    listChannel[indexChannelActive]["messages"].push(newMessage);
<<<<<<< HEAD
=======
    setListMessages(
      listMessages.concat({
        id: new Date().toISOString(),
        author: username,
        content: messageContent,
        date: new Date().toISOString(),
        indexChannel: indexChannelActive
      })
    );
<<<<<<< HEAD
<<<<<<< HEAD
    setListChannel();
>>>>>>> Advances
=======
    console.log(listChannel);
>>>>>>> Add property to message object
=======
>>>>>>> Add little useEffect
=======
>>>>>>> Join a new channel and change amoung them
    ws.current.send(
      JSON.stringify({
        id: new Date().toISOString(),
        author: username,
        content: messageContent,
        date: new Date().toISOString()
      })
    );
  }

  function changeActiveChannel(newId) {
    setIndexChannelActive(newId);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> Add setIndexChannelActive functionality
=======
>>>>>>> Join a new channel and change amoung them
  return (
    <>
      {isLogged ? (
        <Main
          submitSendChannel={submitSendChannel}
          listChannel={listChannel}
          submitSendMessage={submitSendMessage}
          listMessages={listMessages}
          username={username}
<<<<<<< HEAD
<<<<<<< HEAD
          channelName={listChannel[indexChannelActive]["name"]}
=======
>>>>>>> Add setIndexChannelActive functionality
=======
          channelName={listChannel[indexChannelActive]["name"]}
>>>>>>> Join a new channel and change amoung them
          setIndexChannelActive={setIndexChannelActive}
        />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </>
  );
}

export default App;
