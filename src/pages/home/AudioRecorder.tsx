import { socket } from 'lib/socket';
import { useState } from 'react';

// extendable-media-recorder

const AudioRecorder = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [recording, setRecording] = useState(false);

  const connectSocket = () => {
    socket.connect();
  };

  const disconnectSocket = () => {
    socket.disconnect();
  };

  const startRecording = () => {
    const constraints = { audio: true };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      const newMediaRecorder = new MediaRecorder(stream);

      newMediaRecorder.addEventListener('dataavailable', (event) => {
        // socket.emit('audio', event.data);
        const blob = new Blob([event.data], { type: 'audio/wav' });
        socket.emit('audio', blob);
      });

      newMediaRecorder.start();
      setMediaRecorder(newMediaRecorder);
      setRecording(true);
    });
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setMediaRecorder(null);
    setRecording(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <button className="p-3 border w-60 mb-4 rounded" onClick={connectSocket}>
        Connect Socket
      </button>
      <button
        className="p-3 border w-60 mb-4 rounded"
        onClick={disconnectSocket}
      >
        Disconnect Socket
      </button>
      <button className="p-3 border mb-4 rounded w-60" onClick={startRecording}>
        Start Recording
      </button>
      <button className="p-3 border w-60 mb-4 rounded" onClick={stopRecording}>
        Stop Recording
      </button>
      {recording && <div>Recording...</div>}
    </div>
  );
};

export default AudioRecorder;
