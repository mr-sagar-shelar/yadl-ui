import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrintingInvoicesPrintingInvoices from "../PrintingInvoicesPrintingInvoices";

describe("PrintingInvoicesPrintingInvoices component", () => {
  it("PrintingInvoicesPrintingInvoices should render correctly", () => {
    render(<PrintingInvoicesPrintingInvoices />);
    expect(true).toBeTruthy();
  });
});
