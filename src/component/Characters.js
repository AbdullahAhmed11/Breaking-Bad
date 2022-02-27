import React from "react";
import CharacterItem from "./CharacterItem";

const Characters = ({ isLoading, items }) => {
  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default Characters;
