import React from "react";
import { useRoutes, A } from "hookrouter";
import { routes } from "../../lib/routes";

function App() {
  const route = useRoutes(routes);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">Web API explorations</div>
        <nav className="App-nav">
          <A href="/">Home</A>
          <A href="/midi">Midi API</A>
          <A href="/notes">Project Notes</A>
        </nav>
      </header>
      <div className="App-body">{route}</div>
    </div>
  );
}

export default App;
