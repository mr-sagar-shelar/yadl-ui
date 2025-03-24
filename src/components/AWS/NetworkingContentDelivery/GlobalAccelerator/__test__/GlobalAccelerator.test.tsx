import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GlobalAccelerator from "../GlobalAccelerator";

describe("GlobalAccelerator component", () => {
  it("GlobalAccelerator should render correctly", () => {
    render(<GlobalAccelerator />);
    expect(true).toBeTruthy();
  });
});
