import React, { useState } from "react";
import memelista from "./memelist.js";

// detta funktion med state inkluderat hanterar objektet som representerar den i ögonblicket skapade memen
function Maincontent() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // detta state och funktion hämtar in listan och ändrar objektets bild
  const [allMemeImages, setMemeImages] = useState(memelista);

  function getMemeImage() {
    let memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      topText: "",
      bottomText: "",
      randomImage: url,
    }));
  }

  function updateText(event) {
    setMeme({
      ...meme,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <main>
      <div className="form-div">
        <div className="input-fields">
          <input
            onChange={updateText}
            type="text"
            placeholder="Övre text (max 40 tecken)"
            name="topText"
            value={meme.topText}
            maxlength="40"
          ></input>
          <input
            onChange={updateText}
            type="text"
            placeholder="Nedre text (max 40 tecken)"
            name="bottomText"
            value={meme.bottomText}
            maxlength="40"
          ></input>
        </div>

        <button id="newpic--button" onClick={getMemeImage}>
          Nytt meme template{" "}
          <em
            class="fa-solid fa-bolt-lightning"
            style={{ color: "yellow" }}
          ></em>
        </button>
      </div>
      <div className="img-div">
        <img id="memepic" src={meme.randomImage} alt=""></img>
        <p className="toptext">{meme.topText}</p>
        <p className="bottomtext">{meme.bottomText}</p>
      </div>
      <div id="about">
        <h2>Om webbplatsen</h2>
        <p>
          Denna webbplats är skapad med React. Här ingår användning av
          eventlyssnare, state genom objekt och hantering av formulär. Meme
          templates hämtas in från en array i en fristående JavaScript-fil.
          Webbplatsens filer kan ses på Github{" "}
          <a href="https://github.com/cecedvportfolio/memegenerator">här</a>.
        </p>
        <p>
          Jag som skapare av webbplatsen heter Cecilia Edvardsson och är i
          skrivande stund student på Webbutvecklings-programmet på
          Mittuniversitetet.
        </p>
      </div>
    </main>
  );
}

export default Maincontent;
