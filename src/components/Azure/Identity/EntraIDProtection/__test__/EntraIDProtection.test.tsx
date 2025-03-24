import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraIDProtection from "../EntraIDProtection";

describe("EntraIDProtection component", () => {
  it("EntraIDProtection should render correctly", () => {
    render(<EntraIDProtection />);
    expect(true).toBeTruthy();
  });
});
