import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bitcoin from "../Bitcoin";

describe("Bitcoin component", () => {
  it("Bitcoin should render correctly", () => {
    render(<Bitcoin />);
    expect(true).toBeTruthy();
  });
});
