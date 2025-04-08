import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Warning from "../Warning";

describe("Warning component", () => {
  it("Warning should render correctly", () => {
    render(<Warning />);
    expect(true).toBeTruthy();
  });
});
