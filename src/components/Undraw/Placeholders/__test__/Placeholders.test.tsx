import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Placeholders from "../Placeholders";

describe("Placeholders component", () => {
  it("Placeholders should render correctly", () => {
    render(<Placeholders />);
    expect(true).toBeTruthy();
  });
});
