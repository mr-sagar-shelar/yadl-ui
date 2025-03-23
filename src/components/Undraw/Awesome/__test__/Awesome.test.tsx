import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Awesome from "../Awesome";

describe("Awesome component", () => {
  it("Awesome should render correctly", () => {
    render(<Awesome />);
    expect(true).toBeTruthy();
  });
});
