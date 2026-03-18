import { useEffect, useRef } from "react";
import webrtcSingaling from "./webrtc-singaling";

//havely dependend on localVideo.jsx look at it first, and useSocket(stranger data).

export default function startWebRtcNegotiation(
  socket,
  strangerdata,
  pc,
  stream,
) {
  const signalingRef = useRef(null);

  useEffect(() => {
    if (strangerdata && socket && pc) {
      signalingRef.current = webrtcSingaling(socket, pc, strangerdata);
      const { sendOffer, sendCandidate, handelNegotitation } =
        signalingRef.current;
      console.log("current stragerData", strangerdata);

      try {
        if (stream) {
          for (const track of stream.getTracks()) {
            const alreadyAdded = pc
              .getSenders()
              .some((sender) => sender.track?.id === track.id);
            if (!alreadyAdded) {
              pc.addTrack(track, stream);
            }
          }
        }

        pc.onnegotiationneeded = sendOffer;
        pc.onicecandidate = sendCandidate;
        socket.on("message", handelNegotitation);
      } catch (err) {
        console.log(err);
      }

      return () => {
        if (pc.signalingState !== "closed")
          pc.getSenders().forEach((sender) => {
            pc.removeTrack(sender);
          });

        socket.removeAllListeners("message");
      };
    }
  }, [stream, strangerdata, socket, pc]);
}
