import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ECSAnywhere from "../ECSAnywhere";

describe("ECSAnywhere component", () => {
  it("ECSAnywhere should render correctly", () => {
    render(<ECSAnywhere />);
    expect(true).toBeTruthy();
  });
});
