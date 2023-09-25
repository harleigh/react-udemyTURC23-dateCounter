/*
 * The generic component for step amount and count amount
 * --shiftAmt is the amount we shift by via addition
 * */

export function DateModifier({ title, shiftAmt, val, setVal }) {
  const incVal = () => {
    setVal((curVal) => curVal + shiftAmt);
  };

  const decVal = () => {
    setVal((curVal) => curVal - shiftAmt);
  };

  return (
    <>
      <div className="dateModifier">
        <div className="modTitle">{title}:</div>
        <div className="modVal">{val}</div>
        <button onClick={incVal}>+</button>
        <button onClick={decVal}>-</button>
      </div>
    </>
  );
}
