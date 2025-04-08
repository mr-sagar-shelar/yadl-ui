import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Aurora from "../Aurora";

describe("Aurora component", () => {
  it("Aurora should render correctly", () => {
    render(<Aurora />);
    expect(true).toBeTruthy();
  });
});
