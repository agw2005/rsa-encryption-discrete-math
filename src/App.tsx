import { useState } from "react";
import User from "../components/User.tsx";
import Snooper from "../components/Snooper.tsx";

function App() {
  let [plainText, setPlainText] = useState("");
  let [encryptedText, setEncryptedText] = useState("");

  const handleSubmit = (clickEvent: React.FormEvent) => {
    clickEvent.preventDefault();
    setEncryptedText(plainText);
  };

  const toggleBorder: boolean = false;

  const border: string = toggleBorder
    ? "border-2 border-black border-solid"
    : "";

  return (
    <>
      <h1 className={`text-4xl text-center p-32`}>
        Encryption with RSA algorithm
      </h1>

      <div className={`${border} flex justify-center mt-32`}>
        <div className={`${border} max-h-96 mr-8`}>
          <User
            image="../public/user-solid.svg"
            altText="user-sender"
            value="User - Source"
          ></User>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            className={`border-2 border-black border-solid p-4 min-w-96 min-h-96 max-w-96 max-h-96 resize-none`}
            placeholder="Teks yang akan dikirim oleh sender"
            value={plainText}
            onChange={(clickEvent) => setPlainText(clickEvent.target.value)}
          ></textarea>

          <div className={`${border} flex justify-center`}>
            <input
              className={`${border} p-4 bg-gray-300 hover:bg-slate-500`}
              type="submit"
              value="✅"
            />
          </div>
        </form>

        <img
          className={`${border} px-4 max-w-64 min-w-64`}
          src="RSA-arrow.png"
          alt="arrow"
        />

        <textarea
          className={`border-2 border-black border-solid p-4 min-w-96 min-h-96 max-w-96 max-h-96 resize-none`}
          placeholder="Teks yang dilihat receiver"
          value={encryptedText}
          readOnly
        ></textarea>
        <div className={`${border} max-h-96 ml-8`}>
          <User
            image="../public/user-solid.svg"
            altText="user-receiver"
            value="User - Destination"
          ></User>
        </div>
      </div>

      <div className={`flex justify-center`}>
        <Snooper
          image="../public/user-secret-solid.svg"
          altText="user-snooper"
          value="User - Snooper"
        ></Snooper>
      </div>

      <div className={`flex justify-center mb-64`}>
        <textarea
          className={`border-2 border-black border-solid p-4 min-w-96 min-h-96 max-w-96 max-h-96 resize-none`}
          placeholder="Teks dilihat snooper"
          value={encryptedText}
          readOnly
        ></textarea>
      </div>
    </>
  );
}

export default App;
