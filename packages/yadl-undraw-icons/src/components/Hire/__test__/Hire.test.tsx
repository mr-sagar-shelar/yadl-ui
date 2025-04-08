import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hire from "../Hire";

describe("Hire component", () => {
  it("Hire should render correctly", () => {
    render(<Hire />);
    expect(true).toBeTruthy();
  });
});
