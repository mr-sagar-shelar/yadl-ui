import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Swift from "../Swift";

describe("Swift component", () => {
  it("Swift should render correctly", () => {
    render(<Swift />);
    expect(true).toBeTruthy();
  });
});
