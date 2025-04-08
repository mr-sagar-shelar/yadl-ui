import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddFiles from "../AddFiles";

describe("AddFiles component", () => {
  it("AddFiles should render correctly", () => {
    render(<AddFiles />);
    expect(true).toBeTruthy();
  });
});
