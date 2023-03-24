import { useEffect, useRef, useState } from "react";
import { Experience } from "./Experience/Experience";

function App() {
  let [exp, setExp] = useState<Experience | null>(null);

  let canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let experience = new Experience(canvasRef?.current);

    setExp(experience);
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default App;
