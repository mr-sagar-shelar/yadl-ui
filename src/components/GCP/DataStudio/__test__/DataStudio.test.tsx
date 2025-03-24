import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataStudio from "../DataStudio";

describe("DataStudio component", () => {
  it("DataStudio should render correctly", () => {
    render(<DataStudio />);
    expect(true).toBeTruthy();
  });
});
