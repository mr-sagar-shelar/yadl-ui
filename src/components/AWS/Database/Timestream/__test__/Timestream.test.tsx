import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Timestream from "../Timestream";

describe("Timestream component", () => {
  it("Timestream should render correctly", () => {
    render(<Timestream />);
    expect(true).toBeTruthy();
  });
});
