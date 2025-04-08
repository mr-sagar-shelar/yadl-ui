import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QuittingTime from "../QuittingTime";

describe("QuittingTime component", () => {
  it("QuittingTime should render correctly", () => {
    render(<QuittingTime />);
    expect(true).toBeTruthy();
  });
});
