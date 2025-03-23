import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Lost from "../Lost";

describe("Lost component", () => {
  it("Lost should render correctly", () => {
    render(<Lost />);
    expect(true).toBeTruthy();
  });
});
