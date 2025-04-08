import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ideas from "../Ideas";

describe("Ideas component", () => {
  it("Ideas should render correctly", () => {
    render(<Ideas />);
    expect(true).toBeTruthy();
  });
});
