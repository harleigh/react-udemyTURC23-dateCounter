/* Project based on "steps" project from TURC23 */
import { useState } from "react";
import { DateModifier } from "./DateModifier";
import { DisplayDate } from "./DisplayDate";
import { DateOffsetter } from "./DateOffseter";

export default function DateApp() {
  const [offset, setOffset] = useState(1);
  const [jumpAmt, setJumpAmt] = useState(0);

  return (
    <>
      <div className="dateApp">
        <DateOffsetter offsetAmt={offset} setOffsetAmt={setOffset} />
        <DateModifier
          shiftAmt={offset}
          jumpAmount={jumpAmt}
          setJumpAmount={setJumpAmt}
        />
        <DisplayDate shiftAmt={jumpAmt} />
      </div>
    </>
  );
}
