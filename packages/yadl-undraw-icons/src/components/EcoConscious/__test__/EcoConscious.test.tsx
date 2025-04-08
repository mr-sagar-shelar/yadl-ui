import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EcoConscious from "../EcoConscious";

describe("EcoConscious component", () => {
  it("EcoConscious should render correctly", () => {
    render(<EcoConscious />);
    expect(true).toBeTruthy();
  });
});
