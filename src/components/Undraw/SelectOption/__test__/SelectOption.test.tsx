import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SelectOption from "../SelectOption";

describe("SelectOption component", () => {
  it("SelectOption should render correctly", () => {
    render(<SelectOption />);
    expect(true).toBeTruthy();
  });
});
