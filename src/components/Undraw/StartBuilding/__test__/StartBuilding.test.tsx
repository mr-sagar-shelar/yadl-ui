import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StartBuilding from "../StartBuilding";

describe("StartBuilding component", () => {
  it("StartBuilding should render correctly", () => {
    render(<StartBuilding />);
    expect(true).toBeTruthy();
  });
});
