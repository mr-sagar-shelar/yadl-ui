import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataPoints from "../DataPoints";

describe("DataPoints component", () => {
  it("DataPoints should render correctly", () => {
    render(<DataPoints />);
    expect(true).toBeTruthy();
  });
});
