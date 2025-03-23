import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AccessAccount from "../AccessAccount";

describe("AccessAccount component", () => {
  it("AccessAccount should render correctly", () => {
    render(<AccessAccount />);
    expect(true).toBeTruthy();
  });
});
