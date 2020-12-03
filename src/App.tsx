import * as React from "react";
import FileSaver from "file-saver";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

export default function App() {
  const canvasRef = React.useRef<any>();

  React.useLayoutEffect(() => {
    canvasRef.current = document.getElementById("my-canvas");

    if (canvasRef.current.getContext) {
      var ctx = canvasRef.current.getContext("2d");

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }, []);

  React.useLayoutEffect(() => {
    gsap.fromTo(".save-text", { opacity: 0 }, { opacity: 0.5, duration: 2 });
  }, []);

  const onSaveImg = () => {
    FileSaver.saveAs("https://httpbin.org/image", "image.jpg");
  };

  const onSaveText = () => {
    const blob = new Blob(["Hello, world!"], {
      type: "text/plain;charset=utf-8",
    });
    FileSaver.saveAs(blob, "hello world.txt");
  };

  const onSaveCanvas = () => {
    if (canvasRef.current) {
      // @ts-ignore
      canvasRef.current.toBlob(function (blob) {
        FileSaver.saveAs(blob, "pretty image.png");
      });
    }
  };

  return (
    <div className="App">
      <canvas id="my-canvas"></canvas>
      <h1 className="save-text" onClick={onSaveText}>
        saveText
      </h1>
      <h2 onClick={onSaveImg}>saveImage</h2>
      <h2 onClick={onSaveCanvas}>saveCanvas</h2>
    </div>
  );
}
