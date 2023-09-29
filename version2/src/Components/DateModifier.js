/*
 * */

import { useEffect, useState } from "react";

export function DateModifier({
  shiftAmt, //from the step modifier
  daysToJump, //amount of days we jump
  setDaysToJump, //the setter
}) {
  const [inputValue, setInputValue] = useState(daysToJump.toString());

  //this useeffect runs after the jump amount is changed (by the + and - button)
  //or when a number is passed into the textarea
  useEffect(() => {
    setInputValue(daysToJump.toString());
  }, [daysToJump]);

  const update = (value) => {
    const attemptedParse = parseInt(value);

    if (!attemptedParse) {
      //user trying to enter a negative value "-"; we want it displaied
      setInputValue(value.toString());
      setDaysToJump(0);
    } else {
      // setInputValue(attemptedParse.toString()); commented out as this is taken care of by the useEffect
      setDaysToJump(attemptedParse);
    }
  };

  const incVal = () => {
    setDaysToJump((curVal) => {
      const shiftedAmount = curVal + shiftAmt;
      return shiftedAmount;
    });
  };

  const decVal = () => {
    setDaysToJump((curVal) => {
      const shiftedAmount = curVal - shiftAmt;
      //We "wanted" to do this: Update the input when the amount of days to move
      //forward/backward changes. But, this (commented out) causes errors; to update
      //the input value to reflect the amount of days jumping, we needed a useEffect!
      // setInputValue(shiftedAmount.toString());
      return shiftedAmount;
    });
  };

  return (
    <>
      <div className="dateModifier">
        <div className="modTitle">Days to Jump:</div>
        <input
          type={"text"}
          value={inputValue}
          onChange={(e) => update(e.target.value)}
        />
        <button onClick={incVal}>+</button>
        <button onClick={decVal}>-</button>
      </div>
    </>
  );
}
