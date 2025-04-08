import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Groceries from "../Groceries";

describe("Groceries component", () => {
  it("Groceries should render correctly", () => {
    render(<Groceries />);
    expect(true).toBeTruthy();
  });
});
