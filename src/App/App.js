import React from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import NavBar from '../Components/NavBar/NavBar';
import Popular from '../Features/Popular/Popular';
import Subreddits from '../Features/Subreddits/Subreddits';
import CreatePost from '../Features/CreatePost/CreatePost';

import './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route path="popular" element={<Popular/>}/>
          <Route path="Subreddits" element={<Subreddits/>}/>
          <Route path="createPost" element={<CreatePost/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
