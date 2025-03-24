import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeepRacer from "../DeepRacer";

describe("DeepRacer component", () => {
  it("DeepRacer should render correctly", () => {
    render(<DeepRacer />);
    expect(true).toBeTruthy();
  });
});
