import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPages from "./pages/CoinDetailPage";
import CoinSummeryPages from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

const App = () => {
  return (
    <div>
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={CoinSummeryPages} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
};

export default App;
