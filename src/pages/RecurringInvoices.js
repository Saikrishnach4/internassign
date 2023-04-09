import Frame114 from "../components/Frame114";
import Frame126 from "../components/Frame126";
import Frame16 from "../components/Frame16";
import Frame164 from "../components/Frame164";
import Frame127 from "../components/Frame127";
import "./RecurringInvoices.css";

const RecurringInvoices = () => {
  return (
    <div className="recurring-invoices">
      <b className="recurring-invoices1">Recurring Invoices</b>
      <Frame114 />
      <img
        className="recurring-invoices-child"
        alt=""
        src="/rectangle-30@2x.png"
      />
      <div className="buttons">
        <div className="click-me">Add recurring invoice</div>
        <img className="icons" alt="" src="/icons.svg" />
      </div>
      <Frame126 />
      <Frame16 />
      <Frame164 />
      <div className="recurring-invoices-item" />
      <Frame127 />
    </div>
  );
};

export default RecurringInvoices;
