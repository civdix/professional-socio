import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import setPcInstance from "../utils/pcInstance";

function getSocketServerUrl() {
  const fallbackUrl = "http://localhost:5000";
  const configuredUrl = import.meta.env.VITE_APP_WEBSOCKET_URL || fallbackUrl;

  try {
    const parsedConfiguredUrl = new URL(configuredUrl);
    const isConfiguredLocalhost = ["localhost", "127.0.0.1"].includes(
      parsedConfiguredUrl.hostname,
    );
    const isCurrentLocalhost = ["localhost", "127.0.0.1"].includes(
      window.location.hostname,
    );

    if (isConfiguredLocalhost && !isCurrentLocalhost) {
      parsedConfiguredUrl.hostname = window.location.hostname;
      return parsedConfiguredUrl.toString().replace(/\/$/, "");
    }

    return configuredUrl;
  } catch (error) {
    console.error("Invalid websocket URL, using fallback", error);
    return fallbackUrl;
  }
}

export default function useSocket(
  username,
  remoteVideo,
  setMessage,
  updateUser,
  peerConnection,
  setPeerConnection,
  setStrangerData,
) {
  const [socket, setSocket] = useState(null);
  const [strangerUserId, setStrangerUserId] = useState("");
  const [strangerUsername, setStrangerUsername] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [dummyStrangerUserId, setDummyStrangerUserId] = useState(null);
  const [removePair, setRemovePair] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    if (username) {
      const socketUrl = getSocketServerUrl();
      const newSocket = io(socketUrl, {
        transports: ["websocket"],
        auth: { username: username },
      });

      newSocket.on("connect", () => {
        console.log("socket connected", newSocket.id);
      });

      newSocket.on("connect_error", (error) => {
        console.error("socket connect_error", error?.message || error);
      });

      newSocket.on("disconnect", (reason) => {
        console.log("socket disconnected", reason);
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
        setSocket(null);
      };
    }

    !username && nav("/");
  }, [username]);

  useEffect(() => {
    if (socket && !strangerUsername) {
      socket.emit("startConnection");
      setRemovePair(true);
    }
  }, [socket, strangerUsername]);

  useEffect(() => {
    if (socket) {
      socket.on("getStragerData", (data) => {
        setStrangerData(data);
        setStrangerUserId(data.pairedUserId);
        setStrangerUsername(data.strangerUsername);
        setConnectionStatus(true);
      });
      socket.on("waiting", (message) => {
        console.log("waiting", message);
      });
      socket.on("strangerLeftTheChat", clearState);
      socket.on("errSelectingPair", () => socket.emit("startConnection"));

      return () => {
        socket.removeAllListeners("getStragerData");
        socket.removeAllListeners("waiting");
        socket.removeAllListeners("strangerLeftTheChat");
        socket.removeAllListeners("errSelectingPair");
      };
    }
  }, [socket]);

  function clearState() {
    setStrangerData(null);
    setStrangerUserId("");
    setStrangerUsername(null);
    setConnectionStatus(false);
    if (remoteVideo) remoteVideo.srcObject = null;
    setMessage([]);

    if (peerConnection && peerConnection.signalingState !== "closed")
      peerConnection.close();
    const pcInstance = setPcInstance();
    setPeerConnection(pcInstance);
  }

  useEffect(() => {
    if (updateUser > 0) {
      setDummyStrangerUserId(strangerUserId);
      clearState();

      return () => {
        setDummyStrangerUserId(null);
      };
    }
  }, [updateUser]);

  useEffect(() => {
    if (removePair && dummyStrangerUserId)
      socket.emit("pairedUserLeftTheChat", dummyStrangerUserId);
  }, [removePair, dummyStrangerUserId]);

  useEffect(() => {
    if (!socket) return;

    const handleBeforeUnload = () => {
      if (!strangerUsername) {
        socket.emit("soloUserLeftTheChat");
      } else {
        socket.emit("pairedUserLeftTheChat", strangerUserId);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [socket, strangerUsername, strangerUserId]);

  useEffect(() => {
    if (socket && !strangerUsername) {
      setConnectionStatus(false);
    }
  }, [socket, strangerUsername]);

  return { socket, strangerUserId, strangerUsername, connectionStatus };
}
