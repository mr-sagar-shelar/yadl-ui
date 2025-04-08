import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MakingArt from "../MakingArt";

describe("MakingArt component", () => {
  it("MakingArt should render correctly", () => {
    render(<MakingArt />);
    expect(true).toBeTruthy();
  });
});
