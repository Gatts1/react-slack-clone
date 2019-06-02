import React from "react";
import Main from "./main";
import Login from "./login";

function App({ url }) {
  const ws = React.useRef(null);

  const [connected, setConnected] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  const [username, setUsername] = React.useState(null);

  const [listChannel, setListChannel] = React.useState([
    { id: Date.now(), name: "general", messages: [] }
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
        ws.current = new WebSocket(url);
      };
      ws.current.onmessage = ({ data }) => {
        let messageReceive = JSON.parse(data);

        if (messageReceive.hasOwnProperty("newChannel")) {
          receiveNewChannel(messageReceive["newChannel"]);
        } else if (
          messageReceive.hasOwnProperty("channel") &&
          messageReceive.hasOwnProperty("body")
        ) {
          receiveNewMessage(messageReceive);
        }
      };
    }
  }, [ws.current]);

  React.useEffect(() => {
    setListMessages(listChannel[indexChannelActive]["messages"]);
  }, [indexChannelActive]);

  function submitSendChannel(channelName) {
    const newChannel = { id: Date.now(), name: channelName, messages: [] };
    if (connected) ws.current.send(JSON.stringify({ newChannel: newChannel }));
  }

  function submitSendMessage(messageContent) {
    const newMessage = {
      id: new Date().toISOString(),
      author: username,
      content: messageContent,
      date: new Date().toISOString()
    };
    if (connected)
      ws.current.send(
        JSON.stringify({
          channel: listChannel[indexChannelActive]["name"],
          body: newMessage
        })
      );
  }

  function receiveNewChannel(channel) {
    console.log("prueba");
    console.log(channel);
    console.log(listChannel.concat(channel));
    setListChannel(listChannel.concat(channel));
    console.log(listChannel);
  }

  function receiveNewMessage(message) {
    console.log(message);
    console.log(indexChannelActive);
    console.log(listChannel);
    if (message["channel"] === listChannel[indexChannelActive]["name"]) {
      setListMessages(listMessages.concat(message["body"]));
      listChannel[indexChannelActive]["messages"].push(message["body"]);
    } else {
      listChannel.map((channel, index) => {
        if (channel["name"] === message["channel"])
          channel["messages"].push(message["body"]);

        return channel;
      });
    }
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
          channelName={listChannel[indexChannelActive]["name"]}
          setIndexChannelActive={setIndexChannelActive}
        />
      ) : (
        <Login setUsername={setUsername} />
      )}
    </>
  );
}

export default App;
