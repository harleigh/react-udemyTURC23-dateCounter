/* Project based on "date counter" project from TURC23 */
import { useState } from "react";
import { DateModifier } from "./DateModifier";
import { DisplayDate } from "./DisplayDate";
import { DateOffsetter } from "./DateOffseter";

export default function DateApp() {
  const [offset, setOffset] = useState(1);
  const [jumpAmt, setJumpAmt] = useState(0);

  const resetApp = () => {
    setOffset(1);
    setJumpAmt(0);
  };
  return (
    <>
      <div className="dateApp">
        <DateOffsetter offsetAmt={offset} setOffsetAmt={setOffset} />
        <DateModifier
          shiftAmt={offset}
          daysToJump={jumpAmt}
          setDaysToJump={setJumpAmt}
        />
        <DisplayDate shiftAmt={jumpAmt} />
        {jumpAmt !== 0 && <button onClick={resetApp}>Reset</button>}
      </div>
    </>
  );
}
