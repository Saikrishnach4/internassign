import "./Frame164.css";

const Frame164 = () => {
  return (
    <div className="last-30-days-parent">
      <div className="last-30-days">Last 30 days:</div>
      <div className="frame-parent5">
        <button className="paid-parent">
          <div className="paid">Paid</div>
          <div className="div18">€24.000</div>
        </button>
        <button className="pending-parent">
          <div className="paid">pending</div>
          <div className="div18">€41.000</div>
        </button>
        <button className="overdue-parent" autoFocus>
          <div className="paid">overdue</div>
          <div className="div18">€65.600</div>
        </button>
      </div>
    </div>
  );
};

export default Frame164;
