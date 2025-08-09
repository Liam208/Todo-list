import NavBar from "./navbar.jsx";
import Card from "./card.jsx";
import PlainCard from "./plaincard.jsx";
import { useState } from "react";

function App() {
  const [newCard, setNewCard] = useState([]);
  const [cards, setCards] = useState("");

  function handleChange(event) {
    setCards(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (cards.trim() !== "") {
      setNewCard([...newCard, { cardName: cards, tasks: [] }]);
      setCards("");
    }
  }
  const handleDeleteCard = (indexToDelete) => {
    setNewCard((prevCards) =>
      prevCards.filter((_, index) => index !== indexToDelete)
    );
  };
  const handleAddTask = (cardIndex, newTask) => {
    setNewCard((prevCards) =>
      prevCards.map((card, index) =>
        index === cardIndex
          ? { ...card, tasks: [...card.tasks, newTask] }
          : card
      )
    );
  };
  const handleDeleteTask = (cardIndex, taskIndexToDelete) => {
    setNewCard((prevCards) =>
      prevCards.map((card, index) =>
        index === cardIndex
          ? {
              ...card,
              tasks: card.tasks.filter(
                (_, taskIndex) => taskIndex !== taskIndexToDelete
              ),
            }
          : card
      )
    );
  };
  return (
    <>
      <NavBar />
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              value={cards}
              onChange={handleChange}
            />
            <button className="btn btn-success ms-2">Add</button>
          </div>
        </form>
      </div>
      <div className="">
        {newCard.map((card, index) => (
          <PlainCard
            key={index}
            cardName={card.cardName}
            onDeleteCard={() => handleDeleteCard(index)}
            index={index}
            tasks={card.tasks}
            onAddTask={(newTask) => handleAddTask(index, newTask)}
            onDeleteTask={(taskIndex) => handleDeleteTask(index, taskIndex)}
          />
        ))}
      </div>
      
    </>
  );
}

export default App;
