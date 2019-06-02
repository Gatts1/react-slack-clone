/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Message from "./message-body";
import Separator from "./message-separator-date";
import { log } from "util";

function MessageSection({ listMessages }) {
  const messages = listMessages;
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
  });
  return (
    <div
      ref={containerRef}
      css={{
        overflowY: "auto",
        overflowX: "hidden",
        height: "100%",
        width: "98%",
        paddingLeft: 15,
        textAlign: "end"
      }}
    >
      {messages.map((message, index) => {
        message.date = new Date(message.date);
        let component = (
          <Message
            key={message.id}
            author={message.author}
            time={message.date.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit"
            })}
            content={message.content}
          />
        );
        if (
          index === 0 ||
          message.date.toLocaleDateString() !==
            new Date(messages[index - 1].date).toLocaleDateString()
        ) {
          return (
            <>
              <Separator date={message.date} />
              {component}
            </>
          );
        }
        return component;
      })}
      
    </div>
  );
}

export default MessageSection;
