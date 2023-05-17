
import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

const apikey = "e7d3c9dc5ee4ca7b7788845a5f6a5fc4";
const url = "https://api.themoviedb.org/3/movie/";
const upcoming = "upcoming";
const imgurl = "https://image.tmdb.org/t/p/original";
const popular = "popular";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="error"></img>
    </div>
  );
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card image={`${imgurl}/${item.poster_path}`} key={index} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingmovies, setupcoming] = useState([]);
  const [popularmovies, setpopular] = useState([]);

  useEffect(() => {
    const fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}/?api_key=${apikey}`);
      console.log(results);
      setupcoming(results);
      console.log(upcomingmovies);
    };

    fetchupcoming();
    const fetchpopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}/?api_key=${apikey}`);
      console.log(results);
      setpopular(results);
      console.log(popularmovies);
    };

    fetchpopular();
  }, []);

  return (
    <section className="home">
      <div className="banner">
      <img src={`${imgurl}/${popularmovies[0].poster_path}`} style={{
        width:"500px"
      }} alt=""></img>
      </div>
      <Row title={"upcom,ing movies"} arr={upcomingmovies} />
      <Row title={"Popular videos"} arr={popularmovies} />
      <Row title={"TV shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"My Lists"} />
    </section>
  );
};

export default Home;
