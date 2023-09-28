/*
 * */

export function DateModifier({
  shiftAmt, //from the step modifier
  jumpAmount, //amount of days we jump
  setJumpAmount, //the setter
}) {
  const incVal = () => {
    setJumpAmount((curVal) => curVal + shiftAmt);
  };

  const decVal = () => {
    setJumpAmount((curVal) => {
      const shiftedAmount = curVal - shiftAmt;
      return shiftedAmount;
    });
  };

  return (
    <>
      <div className="dateModifier">
        <div className="modTitle">Days to Jump:</div>
        <input
          type={"text"}
          value={jumpAmount}
          onChange={(e) => setJumpAmount(e.target.value)}
        />
        <button onClick={incVal}>+</button>
        <button onClick={decVal}>-</button>
      </div>
    </>
  );
}
