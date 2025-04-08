import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Groups from "../Groups";

describe("Groups component", () => {
  it("Groups should render correctly", () => {
    render(<Groups />);
    expect(true).toBeTruthy();
  });
});
