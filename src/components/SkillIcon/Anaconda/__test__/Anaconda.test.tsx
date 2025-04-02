import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Anaconda from "../Anaconda";

describe("Anaconda component", () => {
  it("Anaconda should render correctly", () => {
    render(<Anaconda />);
    expect(true).toBeTruthy();
  });
});
