import { useState } from "react";
import "./App.css";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Boyqul Abdullayev ",
    artwork: {
      title: "Hello Boyqul    ",
      city: "Your City",
      image:
        "https://img.freepik.com/premium-photo/portrait-successful-programmer-game-developer-coder-guy-uses-computer-laptop-work-game-design-hacker-boy-generative-ai_117038-5477.jpg",
    },
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
  function handTitleChange(e) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
  }
  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  }
  function hanleImgChange(e) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, image: e.target.value },
    });
  }

  return (
    <>
      <div className="container">
        <h1 className="title">My React APP</h1>
        <div className="div">
          {" "}
          <label className="name">
            Names:{" "}
            <input
              className="name-input"
              type="text"
              value={person.name}
              onChange={handleNameChange}
            />
          </label>
          <label className="name">
            Titles:{" "}
            <input
              className="name-input"
              type="text"
              value={person.artwork.title}
              onChange={handTitleChange}
            />
          </label>
          <label className="name">
            Towers:{" "}
            <input
              className="name-input"
              type="text"
              value={person.artwork.city}
              onChange={handleCityChange}
            />
          </label>
          <label className="name">
            Images:{" "}
            <input
              className="name-input"
              type="text"
              value={person.artwork.image}
              onChange={hanleImgChange}
            />
          </label>
        </div>
        <p className="texts">
          <i className="i">{person.artwork.title}</i>
          {person.name}
          (Joylashuvi {person.artwork.city})
        </p>
        <img
          className="img"
          src={person.artwork.image}
          alt={person.artwork.title}
        />
      </div>
    </>
  );
}
