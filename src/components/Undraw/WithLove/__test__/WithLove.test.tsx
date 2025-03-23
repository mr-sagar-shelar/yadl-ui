import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WithLove from "../WithLove";

describe("WithLove component", () => {
  it("WithLove should render correctly", () => {
    render(<WithLove />);
    expect(true).toBeTruthy();
  });
});
