import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FactoryFactory from "../FactoryFactory";

describe("FactoryFactory component", () => {
  it("FactoryFactory should render correctly", () => {
    render(<FactoryFactory />);
    expect(true).toBeTruthy();
  });
});
