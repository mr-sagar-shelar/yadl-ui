import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BSD from "../BSD";

describe("BSD component", () => {
  it("BSD should render correctly", () => {
    render(<BSD />);
    expect(true).toBeTruthy();
  });
});
