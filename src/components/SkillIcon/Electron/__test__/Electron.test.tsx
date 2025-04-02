import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Electron from "../Electron";

describe("Electron component", () => {
  it("Electron should render correctly", () => {
    render(<Electron />);
    expect(true).toBeTruthy();
  });
});
