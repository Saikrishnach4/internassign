import "./Frame114.css";

const Frame114 = () => {
  return (
    <div className="frame-parent">
      <div className="recurring-invoices-parent">
        <b className="recurring-revenue"># recurring invoices</b>
        <b className="b">215</b>
      </div>
      <div className="recurring-invoices-parent">
        <b className="recurring-revenue">recurring revenue</b>
        <b className="month">
          <span>€2500</span>
          <span className="month1">/month</span>
        </b>
      </div>
      <div className="recurring-invoices-parent">
        <b className="recurring-revenue">recurring overdue</b>
        <b className="b">22</b>
      </div>
    </div>
  );
};

export default Frame114;
