import React from "react";
import "./App.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", description: " This is a book about JavaScript, programming, and the wonders of the digital. ", rating: "4/5" },
    { name: "You Don't Know JS",description: " No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. ", rating: "3.5/5" },
    { name: "Head First Java", description: " And, despite its playful appearance, Head First Java is serious stuff: a complete introduction to object-oriented programming and Java. ", rating: "4.3/5" },
    { name: "Responsive Web Design with HTML5 and CSS",description: "this edition covers all the newest developments and improvements in responsive web design including better user accessibility, variable fonts and font loading, CSS Scroll Snap, and much, much more.", rating: "4.3/5" }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",description:"The Shiva Trilogy is the tale of the extraordinary man whose adventures 4000 years ago are remembered today as the myths of the Mahadev, the God of Gods. ",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",description:"It follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. ",
      rating: "4.5/5"
    },
    {
      name: "The Lord of the Rings",description:"The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. ",
      rating: "4.5/5"
    },
    {
      name: "The Alchemist",description:"The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. ",
      rating: "4.4/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",description:"Ever Split the Difference by Chris Voss and Tahl Raz is a guide to using hostage negotiation techniques in business and personal negotiations. ",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",description:"A loonshot challenges conventional wisdom. Whether a change is “disruptive” or not, on the other hand, refers to the effects of an invention on a market.",
      rating: "5/5"
    },
    {
      name: "Rich Dad Poor Dad",description:"Rich Dad Poor Dad tells the story of a boy with two fathers, one rich, one poor, to help you develop the mindset and financial knowledge you need to build a life of wealth and freedom.",
      rating: "4.1/5"
    },
    {
      name: "Zero to One",description:"Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters.",
      rating: "4.2/5"
    }
  ],
  Poetry: [
    { name: "Madhushala",description:" a book of 135 quatrains: verses of four lines (Ruba'i) by Hindi poet and writer Harivansh Rai Bachchan", rating: "4.6/5" },
    { name: "Yama",description:"Mahadevi Verma always know how to make maximum use from minimum words.Few words and deeper meaning .Contains poems from her childhood, young age and then in the last phase of life.", rating: "3.8/5" },
    { name: "Odyssey",description:"an epic poem attributed to Homer, describing Odysseus's adventures in his ten-year attempt to return home to Ithaca after the Trojan War.", rating: "4/5" },
    { name: "Madhukalash ",description:"Madhushala(The Tavern/The House of Wine) is a book of 135 quatrains: verses of four lines (Rubai) by Hindi poet and writer Harivansh Rai Bachchan .", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center",width:"700px",margin:"0.5rem auto" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{
                width: "500px",
                fontSize:"x-small",
                margin: "0.5rem auto",

              }}> {book.description} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
