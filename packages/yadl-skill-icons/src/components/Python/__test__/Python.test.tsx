import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Python from "../Python";

describe("Python component", () => {
  it("Python should render correctly", () => {
    render(<Python />);
    expect(true).toBeTruthy();
  });
});
