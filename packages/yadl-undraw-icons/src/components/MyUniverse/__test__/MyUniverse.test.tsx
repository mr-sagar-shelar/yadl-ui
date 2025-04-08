import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyUniverse from "../MyUniverse";

describe("MyUniverse component", () => {
  it("MyUniverse should render correctly", () => {
    render(<MyUniverse />);
    expect(true).toBeTruthy();
  });
});
