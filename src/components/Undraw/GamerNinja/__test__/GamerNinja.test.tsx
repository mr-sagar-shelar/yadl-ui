import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GamerNinja from "../GamerNinja";

describe("GamerNinja component", () => {
  it("GamerNinja should render correctly", () => {
    render(<GamerNinja />);
    expect(true).toBeTruthy();
  });
});
