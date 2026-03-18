import React, { useEffect } from "react";
import openMediaStream from "../../utils/openMediaStream";

export default function LocalVideo({
  localVideo,
  peerConnection,
  setChangeCamOverly,
  setStream,
  stream,
  selectedDeviceId,
}) {
  useEffect(() => {
    if (peerConnection) {
      let streamInstance = null;
      async function handelMediaStream() {
        try {
          streamInstance = await openMediaStream(selectedDeviceId);
          if (localVideo.current && streamInstance) {
            localVideo.current.srcObject = streamInstance;
            setStream(streamInstance);
          }
        } catch (err) {
          console.error("err in handelMediaStream", err);
        }
      }

      if (localVideo.current) handelMediaStream();

      return () => {
        if (streamInstance) {
          streamInstance.getTracks().forEach((track) => track.stop());
          console.log("stop stream");
        }
      };
    }
  }, [peerConnection]);

  useEffect(() => {
    if (stream) {
      return () => {
        stream.getTracks().forEach((track) => track.stop());
      };
    }
  }, [stream]);

  return (
    <video
      id="localVideo"
      ref={localVideo}
      onClick={() => setChangeCamOverly(true)}
      autoPlay
      playsInline
      controls={false}
      muted
    ></video>
  );
}
