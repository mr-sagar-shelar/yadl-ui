import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Interview from "../Interview";

describe("Interview component", () => {
  it("Interview should render correctly", () => {
    render(<Interview />);
    expect(true).toBeTruthy();
  });
});
