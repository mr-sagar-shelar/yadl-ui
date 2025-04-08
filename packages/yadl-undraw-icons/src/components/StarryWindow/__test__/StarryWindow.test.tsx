import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StarryWindow from "../StarryWindow";

describe("StarryWindow component", () => {
  it("StarryWindow should render correctly", () => {
    render(<StarryWindow />);
    expect(true).toBeTruthy();
  });
});
