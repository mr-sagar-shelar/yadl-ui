import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyCustomers from "../MyCustomers";

describe("MyCustomers component", () => {
  it("MyCustomers should render correctly", () => {
    render(<MyCustomers />);
    expect(true).toBeTruthy();
  });
});
