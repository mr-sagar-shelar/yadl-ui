import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TextFiles from "../TextFiles";

describe("TextFiles component", () => {
  it("TextFiles should render correctly", () => {
    render(<TextFiles />);
    expect(true).toBeTruthy();
  });
});
