import React, { FC } from "react";
import PrintingInvoicesPrintingInvoices from "../PrintingInvoicesPrintingInvoices";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <PrintingInvoicesPrintingInvoices width="500px" height="500px" />
    </div>
  );
};

export default Example;
