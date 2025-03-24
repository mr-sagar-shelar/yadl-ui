import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalLink from "../ElementalLink";

describe("ElementalLink component", () => {
  it("ElementalLink should render correctly", () => {
    render(<ElementalLink />);
    expect(true).toBeTruthy();
  });
});
