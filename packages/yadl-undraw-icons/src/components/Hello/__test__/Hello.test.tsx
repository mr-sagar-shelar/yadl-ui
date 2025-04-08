import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hello from "../Hello";

describe("Hello component", () => {
  it("Hello should render correctly", () => {
    render(<Hello />);
    expect(true).toBeTruthy();
  });
});
