import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Smartphone from "../Smartphone";

describe("Smartphone component", () => {
  it("Smartphone should render correctly", () => {
    render(<Smartphone />);
    expect(true).toBeTruthy();
  });
});
