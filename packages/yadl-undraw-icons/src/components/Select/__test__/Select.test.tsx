import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Select from "../Select";

describe("Select component", () => {
  it("Select should render correctly", () => {
    render(<Select />);
    expect(true).toBeTruthy();
  });
});
