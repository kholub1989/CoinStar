import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPages from "./pages/CoinDetailPage";
import CoinSummeryPages from "./pages/CoinSummaryPage";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={CoinSummeryPages} />
      </BrowserRouter>
    </div>
  );
};

export default App;
