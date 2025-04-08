import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Monitron from "../Monitron";

describe("Monitron component", () => {
  it("Monitron should render correctly", () => {
    render(<Monitron />);
    expect(true).toBeTruthy();
  });
});
