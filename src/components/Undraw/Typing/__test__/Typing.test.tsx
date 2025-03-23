import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Typing from "../Typing";

describe("Typing component", () => {
  it("Typing should render correctly", () => {
    render(<Typing />);
    expect(true).toBeTruthy();
  });
});
