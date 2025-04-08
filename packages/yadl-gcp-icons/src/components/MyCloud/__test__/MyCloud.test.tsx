import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyCloud from "../MyCloud";

describe("MyCloud component", () => {
  it("MyCloud should render correctly", () => {
    render(<MyCloud />);
    expect(true).toBeTruthy();
  });
});
