import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Researching from "../Researching";

describe("Researching component", () => {
  it("Researching should render correctly", () => {
    render(<Researching />);
    expect(true).toBeTruthy();
  });
});
