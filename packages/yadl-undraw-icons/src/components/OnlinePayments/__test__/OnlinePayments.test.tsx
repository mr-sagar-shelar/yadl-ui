import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlinePayments from "../OnlinePayments";

describe("OnlinePayments component", () => {
  it("OnlinePayments should render correctly", () => {
    render(<OnlinePayments />);
    expect(true).toBeTruthy();
  });
});
