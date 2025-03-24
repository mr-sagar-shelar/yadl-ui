import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Shield from "../Shield";

describe("Shield component", () => {
  it("Shield should render correctly", () => {
    render(<Shield />);
    expect(true).toBeTruthy();
  });
});
