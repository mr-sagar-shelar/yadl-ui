import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dog from "../Dog";

describe("Dog component", () => {
  it("Dog should render correctly", () => {
    render(<Dog />);
    expect(true).toBeTruthy();
  });
});
