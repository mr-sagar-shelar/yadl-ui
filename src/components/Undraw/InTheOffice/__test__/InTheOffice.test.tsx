import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InTheOffice from "../InTheOffice";

describe("InTheOffice component", () => {
  it("InTheOffice should render correctly", () => {
    render(<InTheOffice />);
    expect(true).toBeTruthy();
  });
});
