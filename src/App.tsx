import { useState } from "react";

function App() {
  let [plainText, setPlainText] = useState("");
  let [encryptedText, setEncryptedText] = useState("");

  const handleSubmit = (clickEvent: React.FormEvent) => {
    clickEvent.preventDefault();
    setEncryptedText(plainText);
  };

  const border: String = "border-2 border-black border-solid";

  return (
    <>
      <h1 className={`text-4xl text-center p-16`}>
        Encryption with RSA algorithm
      </h1>

      <div className={`${border} flex justify-center`}>
        <div className={`${border} flex flex-col text-center`}>
          <img
            className={`${border} px-4 w-64`}
            src="\user-solid.svg"
            alt="user-sender"
          />
          <p>Sender</p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className={`${border} p-4 min-w-96 min-h-96 max-w-96 max-h-96 resize-none`}
            placeholder="Teks yang akan di-enkripsi"
            value={plainText}
            onChange={(clickEvent) => setPlainText(clickEvent.target.value)}
          ></textarea>

          <br />

          <input
            className={`${border} p-4 bg-gray-300 hover:bg-slate-500 hover:text-white`}
            type="submit"
            value="✅"
          />
        </form>

        <img
          className={`${border} px-4 max-w-64 min-w-64`}
          src="\RSA-arrow.png"
          alt="arrow"
        />

        <textarea
          className={`${border} p-4 min-w-96 min-h-96 max-w-96 max-h-96 resize-none`}
          placeholder="Teks yang telah di-enkripsi"
          value={encryptedText}
          readOnly
        ></textarea>
      </div>
    </>
  );
}

export default App;
