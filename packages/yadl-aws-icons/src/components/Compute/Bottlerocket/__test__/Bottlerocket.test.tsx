import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bottlerocket from "../Bottlerocket";

describe("Bottlerocket component", () => {
  it("Bottlerocket should render correctly", () => {
    render(<Bottlerocket />);
    expect(true).toBeTruthy();
  });
});
