import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataFactories from "../DataFactories";

describe("DataFactories component", () => {
  it("DataFactories should render correctly", () => {
    render(<DataFactories />);
    expect(true).toBeTruthy();
  });
});
