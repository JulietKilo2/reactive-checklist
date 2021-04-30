import { useState, useEffect } from "react";

const Counter = ({ count, list }) => {
  const [text, setText] = useState("");
  const flavoredText = () => {
    const percentage = (count / list.length) * 100;
    if (percentage === 100) {
      console.log(percentage);
      return "Well done!";
    } else if (percentage >= 50) {
      return "Halfway done.";
    } else {
      return "Getting started.";
    }
  };
  useEffect(() => {
    setText(flavoredText);
  }, [count, list]);
  return (
    <div className="counter-container">
      <div className="counter-status">
        <span>{text}</span>
        <span>
          {count}/{list.length}
        </span>
      </div>
      <div className="progression">
        <div className="progression-bar">Bar</div>
      </div>
    </div>
  );
};

export default Counter;
