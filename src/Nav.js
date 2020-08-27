import React from 'react';
import './Nav.css';
import requests from "./requests";

function Nav({ setSelected }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelected(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelected(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setSelected(requests.fetchAction)}>Action</h2>
      <h2 onClick={() => setSelected(requests.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setSelected(requests.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setSelected(requests.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setSelected(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelected(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelected(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelected(requests.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setSelected(requests.fetchTV)}>Movies</h2>
    </div>
  );
}

export default Nav;