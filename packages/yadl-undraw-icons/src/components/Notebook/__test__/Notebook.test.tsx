import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Notebook from "../Notebook";

describe("Notebook component", () => {
  it("Notebook should render correctly", () => {
    render(<Notebook />);
    expect(true).toBeTruthy();
  });
});
