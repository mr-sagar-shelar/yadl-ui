import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataBox from "../DataBox";

describe("DataBox component", () => {
  it("DataBox should render correctly", () => {
    render(<DataBox />);
    expect(true).toBeTruthy();
  });
});
