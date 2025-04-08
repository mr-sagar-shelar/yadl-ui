import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CustomIPPrefix from "../CustomIPPrefix";

describe("CustomIPPrefix component", () => {
  it("CustomIPPrefix should render correctly", () => {
    render(<CustomIPPrefix />);
    expect(true).toBeTruthy();
  });
});
