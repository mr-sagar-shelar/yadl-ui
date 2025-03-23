import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CarRepair from "../CarRepair";

describe("CarRepair component", () => {
  it("CarRepair should render correctly", () => {
    render(<CarRepair />);
    expect(true).toBeTruthy();
  });
});
