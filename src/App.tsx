import { useState } from "react";

function App() {
  let [plainText, setPlainText] = useState("");
  let [encryptedText, setEncryptedText] = useState("");

  const handleSubmit = (clickEvent: React.FormEvent) => {
    clickEvent.preventDefault();
    setEncryptedText(plainText);
  };

  return (
    <>
      <h1 className="text-4xl text-center p-16">
        Encryption with RSA algorithm
      </h1>
      <div className="flex justify-evenly">
        <form className="" method="post" onSubmit={handleSubmit}>
          <textarea
            className="p-4 border-2 border-black border-solid min-w-96 min-h-96 resize-none"
            placeholder="Teks yang akan di-enkripsi"
            value={plainText}
            onChange={(clickEvent) => setPlainText(clickEvent.target.value)}
          ></textarea>
          <br />{" "}
          <input
            className="border-2 border-black border-solid p-4 bg-gray-300 hover:bg-slate-500 hover:text-white"
            type="submit"
            value="✅"
          />
        </form>

        <img className="max-w-64" src="\right-arrow.svg" alt="arrow" />

        <textarea
          className="p-4 border-2 border-black border-solid min-w-96 min-h-96 resize-none"
          placeholder="Teks yang telah di-enkripsi"
          value={encryptedText}
          readOnly
        ></textarea>
      </div>
    </>
  );
}

export default App;
