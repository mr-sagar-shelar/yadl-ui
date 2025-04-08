import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Collaboration from "../Collaboration";

describe("Collaboration component", () => {
  it("Collaboration should render correctly", () => {
    render(<Collaboration />);
    expect(true).toBeTruthy();
  });
});
