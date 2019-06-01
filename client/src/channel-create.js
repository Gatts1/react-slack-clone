/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function ChannelCreate({ submitSendChannel }) {
  const [showChannel, setShowChannel] = React.useState(false);
  function handleOnClick() {
    setShowChannel(true);
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    submitSendChannel(event.target.elements.createChannel.value);
    setShowChannel(false);
  }
  function handleOnCancel(event) {
    event.preventDefault();
    setShowChannel(false);
  }
  return (
    <>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <span
          css={{
            color: "#b1b1b1",
            marginLeft: "15px",
            "&:hover": {
              color: "white"
            }
          }}
        >
          Channels
        </span>
        <i
          className="fas fa-plus"
          onClick={handleOnClick}
          css={{
            border: "1px solid #a7a3a8",
            marginRight: "15px",
            borderRadius: "50%",
            padding: "2px",
            fontSize: "10px",
            color: "#a7a3a8",
            "&:hover": {
              color: "white",
              borderColor: "white"
            }
          }}
        />
      </div>
      {showChannel && (
        <div
          css={{
            position: "fixed",
            zIndex: "1",
            paddingTop: "100px",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.4)"
          }}
        >
          <div
            css={{
              backgroundColor: "#fefefe",
              margin: "auto",
              padding: "20px",
              border: "1px solid #888",
              width: "80%"
            }}
          >
            <form
              action=""
              onSubmit={handleOnSubmit}
              onReset={handleOnCancel}
              css={{ display: "flex", flexDirection: "column" }}
            >
              <p
                css={{
                  fontSize: "2em",
                  marginBlockStart: "0.67em",
                  marginBlockEnd: "0.67em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                  fontWeight: "bold"
                }}
              >
                Create Channel
              </p>
              <p css={{ marginBottom: "20px", color: "#4e4e4e" }}>
                Channels are where your members communicate. They’re best when
                organized around a topic — #leads, for example.
              </p>
              <label htmlFor="createChannel" css={{ fontWeight: "bold" }}>
                Name
              </label>
              <input
                name="createChannel"
                type="text"
                id="createChannel"
                css={{
                  lineHeight: "1.5em",
                  border: "1px solid gray",
                  fontSize: "1.1em",
                  fontWeight: "600",
                  padding: "0.5em",
                  borderRadius: "0.25rem",
                  marginBottom: "5px"
                }}
              />
              <div
                css={{
                  display: "flex",
                  flexDirection: "row-reverse"
                }}
              >
                <button
                  type="submit"
                  value="submit"
                  css={{
                    backgroundColor: "#237b5a",
                    borderRadius: "10px",
                    border: "none",
                    color: "white",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px",
                    marginLeft: "15px"
                  }}
                >
                  Create Channel
                </button>
                <button
                  type="reset"
                  css={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    border: "1px solid gray",
                    color: "black",
                    padding: "15px 32px",
                    textAlign: "center",
                    textDecoration: "none",
                    display: "inline-block",
                    fontSize: "16px"
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ChannelCreate;
