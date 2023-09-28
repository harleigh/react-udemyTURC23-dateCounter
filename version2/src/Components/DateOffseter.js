export function DateOffsetter({ offsetAmt, setOffsetAmt }) {
  return (
    <>
      <div className="dateModifier">
        <div className="modTitle">Amount per Jump: {offsetAmt} </div>
        <input
          type={"range"}
          value={offsetAmt}
          min={1}
          max={14}
          onChange={(e) => setOffsetAmt(Number(e.target.value))}
        />
      </div>
    </>
  );
}
