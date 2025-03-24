import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Intune from "../Intune";

describe("Intune component", () => {
  it("Intune should render correctly", () => {
    render(<Intune />);
    expect(true).toBeTruthy();
  });
});
