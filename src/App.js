import { Children, useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus culpa recusandae saepe, dolores rerum earum voluptas aliquid libero sunt nihil ipsum nesciunt aut quas amet laboriosam totam similique debitis!",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Laboriosam alias earum labore, at veritatis fuga soluta modiDelectus molestias, tempore voluptatibus adipisci  Aliquam qua fugit tempora non harum illum nisi quia minus itaque dictasequi enim quidem molestias excepturi velit.",
  },
  {
    title: "Do you ship to countries outside the IND?",
    text: " Aliquid fugiat reprehenderit tempora aspernatur? Quaerat quidoloribus non cumque aliquid aliquam mollitia unde explicabo, d inventore et quam iusto facilis!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={el.title}
          key={el.title}
        >
          {el.text}
        </AccordianItem>
      ))}
    </div>
  );
}

function AccordianItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
    console.log(num, curOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
