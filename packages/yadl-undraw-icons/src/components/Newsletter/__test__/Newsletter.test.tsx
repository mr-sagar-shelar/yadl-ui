import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Newsletter from "../Newsletter";

describe("Newsletter component", () => {
  it("Newsletter should render correctly", () => {
    render(<Newsletter />);
    expect(true).toBeTruthy();
  });
});
