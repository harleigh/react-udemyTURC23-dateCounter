/*
 * The generic component for step amount and count amount
 * --shiftAmt is the amount we shift by via addition
 *
 *  The date modifier has a flag signifying whether the amount
 *  can be <= 0
 * */

export function DateModifier({
  title,
  shiftAmt,
  val,
  allowZeroOrLess,
  setVal,
}) {
  const incVal = () => {
    setVal((curVal) => curVal + shiftAmt);
  };

  const decVal = () => {
    setVal((curVal) => {
      const shiftedAmount = curVal - shiftAmt;
      if (allowZeroOrLess) {
        return shiftedAmount;
      } else {
        if (shiftedAmount > 0) {
          return shiftedAmount;
        } else {
          return curVal;
        }
      }
    });
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
