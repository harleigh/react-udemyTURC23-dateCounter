export function DisplayDate({ shiftAmt }) {
  //
  //builds the date without the time bits of the date
  const getDateShift = () => {
    var fullDate = new Date();
    fullDate.setDate(fullDate.getDate() + shiftAmt);
    const dateNoTime = fullDate.toString().split(" ").slice(0, 4);

    return dateNoTime.toString();
  };

  const setMessage = () => {
    var msg = "";

    const getDayConjugation = () => {
      return Math.abs(shiftAmt) === 1 ? "day" : "days";
    };

    //put in the leading message before the date
    if (shiftAmt === 0) {
      msg = "Today's date is ";
    } else if (shiftAmt < 0) {
      msg = `${Math.abs(shiftAmt)} ${getDayConjugation()} ago the date was `;
    } else {
      msg = `${shiftAmt} ${getDayConjugation()} from today the date will be `;
    }
    msg += getDateShift();

    return msg;
  };

  return <div className="displayDate">{setMessage()}</div>;
}
