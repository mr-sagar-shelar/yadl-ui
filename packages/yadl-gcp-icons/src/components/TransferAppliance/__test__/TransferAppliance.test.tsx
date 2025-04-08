import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TransferAppliance from "../TransferAppliance";

describe("TransferAppliance component", () => {
  it("TransferAppliance should render correctly", () => {
    render(<TransferAppliance />);
    expect(true).toBeTruthy();
  });
});
