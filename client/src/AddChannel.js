import React from "react";

function AddChannel() {
  const [showChannel, setShowChannel] = React.useState(false);
  function handleOnClick() {
    setShowChannel(true);
  }
  function handleOnSubmit(event) {
    event.preventDefault();
    setShowChannel(false);
  }
  return (
    <>
      <h2>Channels</h2>
      <button type="button" onClick={handleOnClick}>
        +
      </button>
      {showChannel && (
        <div>
          <form action="" onSubmit={handleOnSubmit} onReset={handleOnSubmit}>
            <p>Create Channel</p>
            <p>
              Channels are where your members communicate. They’re best when
              organized around a topic — #leads, for example.
            </p>
            <label htmlFor="createChannel">Name</label>
            <input type="text" id="createChannel" />
            <button type="submit">Create Channel</button>
            <button type="reset">Cancel</button>
          </form>
        </div>
      )}
    </>
  );
}

export default AddChannel;
