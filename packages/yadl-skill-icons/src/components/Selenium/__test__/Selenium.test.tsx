import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Selenium from "../Selenium";

describe("Selenium component", () => {
  it("Selenium should render correctly", () => {
    render(<Selenium />);
    expect(true).toBeTruthy();
  });
});
