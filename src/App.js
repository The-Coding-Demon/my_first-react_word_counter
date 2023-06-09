import { Banner } from "./components/banner";
import { Wordcounter } from "./components/wordcounter";
import { useState } from "react";
function App() {
  const [count, wordcount] = useState(0);
  return (
    <div>
      <Banner />
      <Wordcounter count={count} wordcounter={wordcount} />
    </div>
  );
}

export default App;
