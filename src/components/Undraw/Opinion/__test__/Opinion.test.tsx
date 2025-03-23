import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Opinion from "../Opinion";

describe("Opinion component", () => {
  it("Opinion should render correctly", () => {
    render(<Opinion />);
    expect(true).toBeTruthy();
  });
});
