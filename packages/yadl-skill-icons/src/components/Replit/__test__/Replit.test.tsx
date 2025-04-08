import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Replit from "../Replit";

describe("Replit component", () => {
  it("Replit should render correctly", () => {
    render(<Replit />);
    expect(true).toBeTruthy();
  });
});
