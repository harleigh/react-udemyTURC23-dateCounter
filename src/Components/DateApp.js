/* Project based on "steps" project from TURC23 */
import { useState } from "react";
import { DateModifier } from "./DateModifier";

export default function DateApp() {
  const [multiplier, setMultiplier] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dateApp">
        <DateModifier title={"Step"} val={multiplier} setVal={setMultiplier} />
        <DateModifier title={"Count"} val={count} setVal={setCount} />
      </div>
    </>
  );
}
