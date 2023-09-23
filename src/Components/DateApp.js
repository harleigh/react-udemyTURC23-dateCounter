/* Project based on "steps" project from TURC23 */
import { useState } from "react";
import { DateModifier } from "./DateModifier";
import { DisplayDate } from "./DisplayDate";

export default function DateApp() {
  const [multiplier, setMultiplier] = useState(1);
  const [count, setCount] = useState(0);

  const amtShiftDays = multiplier * count;

  return (
    <>
      <div className="dateApp">
        <DateModifier title={"Step"} val={multiplier} setVal={setMultiplier} />
        <DateModifier title={"Count"} val={count} setVal={setCount} />
        <DisplayDate shiftAmt={amtShiftDays} />
      </div>
    </>
  );
}
