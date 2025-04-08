import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Powershell from "../Powershell";

describe("Powershell component", () => {
  it("Powershell should render correctly", () => {
    render(<Powershell />);
    expect(true).toBeTruthy();
  });
});
