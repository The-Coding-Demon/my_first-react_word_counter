export const Wordcounter = ({ count, wordcounter }) => {
  const Handleonchange = (event) => {
    const spaces = event.target.value.match(/\S+/g);
    const words = spaces ? spaces.length : 0;
    wordcounter(words);
    // const value = event.target.value.trim();
    // const words = value.split(" ");
    // console.log(words);
    // wordcounter(words.length);
  };
  return (
    <div className="border m-3 p-3 text-center">
      <textarea cols="100" rows="10" onChange={Handleonchange}></textarea>
      <h2 className="p-3">Word Count: {count}</h2>
    </div>
  );
};
