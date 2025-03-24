import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Capacity from "../Capacity";

describe("Capacity component", () => {
  it("Capacity should render correctly", () => {
    render(<Capacity />);
    expect(true).toBeTruthy();
  });
});
