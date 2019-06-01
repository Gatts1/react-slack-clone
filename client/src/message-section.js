/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Message from "./message-body";
import Separator from "./message-separator-date";

function MessageSection() {
  const messages = [
    {
      id: "1",
      author: "test1",
      content: "hola",
      date: "2019-06-01T03:22:31.182Z"
    },
    {
      id: "2",
      author: "test2",
      content: "que",
      date: "2019-07-01T03:22:31.182Z"
    },
    {
      id: "3",
      author: "test2",
      content: "que",
      date: "2019-08-01T03:22:31.182Z"
    },
    {
      id: "4",
      author: "test2",
      content: "que",
      date: "2019-09-01T03:22:31.182Z"
    },
    {
      id: "5",
      author: "test3",
      content: "asdf",
      date: "2019-10-01T03:22:31.182Z"
    },
    {
      id: "6",
      author: "test3",
      content: "qwerty",
      date: "2019-05-31T00:00:00.182Z"
    },
    {
      id: "7",
      author: "test4",
      content: "azerty",
      date: "2019-05-01T03:22:31.182Z"
    },
    {
      id: "8",
      author: "test4",
      content: "12345",
      date: "2019-04-01T03:22:31.182Z"
    },
    {
      id: "9",
      author: "test5",
      content: "bye",
      date: "2019-03-01T03:22:31.182Z"
    },
    {
      id: "10",
      author: "test5",
      content: "adios",
      date: "2019-02-01T03:22:31.182Z"
    }
  ];

  return (
    <div
      css={{
        overflowY: "auto",
        overflowX: "hidden",
        height: "100%",
        width: "98%",
        paddingLeft: 15,
        textAlign: "end"
      }}
    >
      {messages.map(message => {
        return (
          <Message
            key={message.id}
            author={message.author}
            time={message.date}
            content={message.content}
          />
        );
      })}
    </div>
  );
}

export default MessageSection;
