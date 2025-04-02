import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LinkedIn from "../LinkedIn";

describe("LinkedIn component", () => {
  it("LinkedIn should render correctly", () => {
    render(<LinkedIn />);
    expect(true).toBeTruthy();
  });
});
