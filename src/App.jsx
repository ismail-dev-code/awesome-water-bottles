import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";

const bottlesPromise = fetch("/bottles/bottles.json").then((res) =>res.json());


function App() {
  return (
    <>
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Bottles ara loading....</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
