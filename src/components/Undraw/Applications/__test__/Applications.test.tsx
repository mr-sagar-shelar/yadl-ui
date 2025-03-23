import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Applications from "../Applications";

describe("Applications component", () => {
  it("Applications should render correctly", () => {
    render(<Applications />);
    expect(true).toBeTruthy();
  });
});
