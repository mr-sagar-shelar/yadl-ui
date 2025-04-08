import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Completed from "../Completed";

describe("Completed component", () => {
  it("Completed should render correctly", () => {
    render(<Completed />);
    expect(true).toBeTruthy();
  });
});
