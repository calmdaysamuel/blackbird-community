import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import PostPage from "./pages/PostPage/PostPage";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import { Provider } from "react-redux";
import store from "./services/Store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/@:userName" element={<UserPage />} />
          <Route path="/:communityName" element={<CommunityPage />} />
          <Route
            path="/:communityName/:channelName"
            element={<CommunityPage />}
          />
          <Route
            path="/:communityName/:channelName/:postId"
            element={<PostPage />}
          />
          <Route
            path="/:communityName/:channelName/:postId/:commentId"
            element={<PostPage />}
          />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
