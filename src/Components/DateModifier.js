/*
 * The generic component for step amount and count amount
 * */

export function DateModifier({ title, val, setVal }) {
  const incVal = () => {
    setVal((curVal) => curVal + 1);
  };

  const decVal = () => {
    setVal((curVal) => curVal - 1);
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
