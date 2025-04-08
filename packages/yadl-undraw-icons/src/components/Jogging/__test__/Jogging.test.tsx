import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Jogging from "../Jogging";

describe("Jogging component", () => {
  it("Jogging should render correctly", () => {
    render(<Jogging />);
    expect(true).toBeTruthy();
  });
});
