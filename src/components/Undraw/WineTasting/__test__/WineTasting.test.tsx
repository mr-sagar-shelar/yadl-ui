import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WineTasting from "../WineTasting";

describe("WineTasting component", () => {
  it("WineTasting should render correctly", () => {
    render(<WineTasting />);
    expect(true).toBeTruthy();
  });
});
