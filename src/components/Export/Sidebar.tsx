import { useEffect, useState } from "react";
import getBlobDuration from "get-blob-duration";
import { fixWebmDuration } from "@fix-webm-duration/fix";

export type BoxProps = {
  text?: string;
  width?: number;
  height?: number;
};

enum RecordingState {
  none = 0,
  recording = 1,
  stopped = 2,
}

const Box = (props: BoxProps) => {
  const { width = 200, height = 200 } = props;
  let mediaStream: MediaStream;
  let videoEl: HTMLVideoElement;
  let mediaRecorder: MediaRecorder;
  let videoData: any;
  const mimeType = "video/webm;codecs=h264";

  const [recordingState, setRecordingState] = useState<RecordingState>(
    RecordingState.none,
  );
  // const [videoVisible, setVideoVisible] = useState<boolean>(false);

  const startRecording = async () => {
    const blobSlice: BlobPart[] = [];
    mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        width: 800,
        height: 700,
        frameRate: 60,
      },
      audio: false,
      // @ts-ignore
      preferCurrentTab: true,
    });

    videoEl.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream, {
      mimeType: mimeType,
    });
    mediaRecorder.addEventListener("dataavailable", async (event) => {
      var data = event.data;
      if (data && data.size > 0) {
        blobSlice.push(data);
      }
    });
    mediaRecorder.onstop = async () => {
      console.error(` $$$$ Stoppeding`);
      const finalBlob = new Blob([...blobSlice], { type: "video/webm" });
      const duration = await getBlobDuration(finalBlob);
      console.log(duration + " seconds");
      const fixedBlob = await fixWebmDuration(finalBlob, duration * 1000);
      videoData = finalBlob;
      videoEl.srcObject = null;
      videoEl.src = URL.createObjectURL(fixedBlob);
      setRecordingState(RecordingState.stopped);
    };
    mediaRecorder.start();
    setRecordingState(RecordingState.recording);
  };

  const stopRecording = () => {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaRecorder.stop();
  };

  useEffect(() => {
    videoEl = document.getElementById("video-el") as HTMLVideoElement;
  }, []);

  return (
    <>
      <div
        {...props}
        style={{ width, height }}
        className="bg-primary-content p-4 flex flex-col gap-4"
      >
        <button
          type="button"
          className="btn btn-soft"
          onClick={() => {
            startRecording();
          }}
        >
          Record
        </button>
        <video
          id="video-el"
          controls
          autoPlay
          style={{
            width: "100%",
            visibility:
              recordingState == RecordingState.stopped ? "visible" : "hidden",
          }}
        />
      </div>
    </>
  );
};

export default Box;
