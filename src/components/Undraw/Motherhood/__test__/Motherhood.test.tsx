import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Motherhood from "../Motherhood";

describe("Motherhood component", () => {
  it("Motherhood should render correctly", () => {
    render(<Motherhood />);
    expect(true).toBeTruthy();
  });
});
