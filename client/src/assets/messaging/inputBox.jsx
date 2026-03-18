import { useState } from "react";

export default function InputBox({
  socket,
  setMessage,
  strangerUserId,
  username,
  setUpdateUser,
}) {
  const [messageInputValue, setMessageInputValue] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    socket.emit("private message", {
      content: {
        username: username,
        message: messageInputValue,
        userid: socket.id,
      },
      to: strangerUserId,
    });

    setMessage((prevMessages) => [
      ...prevMessages,
      {
        username: username,
        message: messageInputValue,
      },
    ]);
    setMessageInputValue("");
  }

  function getNewUser(e) {
    e.preventDefault();
    setUpdateUser((prev) => prev + 1);
  }

  function cutCall(e) {
    e.preventDefault();

    if (socket) {
      if (strangerUserId) {
        socket.emit("pairedUserLeftTheChat", strangerUserId);
      } else {
        socket.emit("soloUserLeftTheChat");
      }
    }

    setMessage([]);
    setUpdateUser((prev) => prev + 1);
  }

  return (
    <div id="sendMessageBtn">
      <form onSubmit={sendMessage} id="sendMassage">
        <input
          type="button"
          value="new"
          id="changeNewUser"
          onClick={getNewUser}
        />
        <input type="button" value="cut" id="cutCallBtn" onClick={cutCall} />
        <input
          type="text"
          name="sendMessage"
          id="sendMessageBox"
          value={messageInputValue}
          onChange={(e) => setMessageInputValue(e.target.value)}
        />
        <input type="submit" value="Send" id="sendMessageBtn" />
      </form>
    </div>
  );
}
