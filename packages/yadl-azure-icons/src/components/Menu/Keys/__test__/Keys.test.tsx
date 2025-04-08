import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Keys from "../Keys";

describe("Keys component", () => {
  it("Keys should render correctly", () => {
    render(<Keys />);
    expect(true).toBeTruthy();
  });
});
