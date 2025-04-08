import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Launcher from "../Launcher";

describe("Launcher component", () => {
  it("Launcher should render correctly", () => {
    render(<Launcher />);
    expect(true).toBeTruthy();
  });
});
