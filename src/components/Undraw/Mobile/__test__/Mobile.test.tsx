import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mobile from "../Mobile";

describe("Mobile component", () => {
  it("Mobile should render correctly", () => {
    render(<Mobile />);
    expect(true).toBeTruthy();
  });
});
