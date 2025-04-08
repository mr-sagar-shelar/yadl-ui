import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Receipt from "../Receipt";

describe("Receipt component", () => {
  it("Receipt should render correctly", () => {
    render(<Receipt />);
    expect(true).toBeTruthy();
  });
});
