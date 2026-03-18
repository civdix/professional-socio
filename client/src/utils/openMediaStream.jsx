export default async function openMediaStream(cameraId) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error("Camera API is not available in this browser");
  }

  const isLocalHost = ["localhost", "127.0.0.1"].includes(
    window.location.hostname,
  );
  if (!window.isSecureContext && !isLocalHost) {
    throw new Error(
      "Camera access requires HTTPS on mobile or non-localhost domains",
    );
  }

  const constraints = {
    video: {
      width: { max: 1920 },
      height: { max: 1080 },
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
  };

  if (cameraId) {
    constraints.video.deviceId = { exact: cameraId };
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    return stream;
  } catch (err) {
    console.log("err acces local media stream", err);
    throw err;
  }
}
