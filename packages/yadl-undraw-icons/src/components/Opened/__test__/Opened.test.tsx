import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Opened from "../Opened";

describe("Opened component", () => {
  it("Opened should render correctly", () => {
    render(<Opened />);
    expect(true).toBeTruthy();
  });
});
