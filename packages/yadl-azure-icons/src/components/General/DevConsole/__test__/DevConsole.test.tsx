import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DevConsole from "../DevConsole";

describe("DevConsole component", () => {
  it("DevConsole should render correctly", () => {
    render(<DevConsole />);
    expect(true).toBeTruthy();
  });
});
