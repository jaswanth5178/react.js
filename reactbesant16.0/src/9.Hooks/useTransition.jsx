import React, { useState, useTransition } from 'react';

const App = () => {
  const [tab, setTab] = useState("Home");
  const [isPending, startTransition] = useTransition();

  function handleClickTab(tabs) {
    startTransition(() => {
      setTab(tabs);
    });
  }

  return (
    <div>
      <button onClick={() => handleClickTab("Home")}>Home</button>
      <button onClick={() => handleClickTab("About")}>About</button>
      <button onClick={() => handleClickTab("Contact")}>Contact</button>

      {isPending && (
        <p style={{ color: "red" }}>Loading....</p>
      )}

      {tab === "Home" && <h1>Home</h1>}
      {tab === "About" && <h1>About</h1>}
      {tab === "Contact" && <h1>Contact</h1>}
    </div>
  );
};

export default App;
