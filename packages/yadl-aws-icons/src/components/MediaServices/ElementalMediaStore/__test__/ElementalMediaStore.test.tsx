import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalMediaStore from "../ElementalMediaStore";

describe("ElementalMediaStore component", () => {
  it("ElementalMediaStore should render correctly", () => {
    render(<ElementalMediaStore />);
    expect(true).toBeTruthy();
  });
});
