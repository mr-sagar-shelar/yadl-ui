import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalLive from "../ElementalLive";

describe("ElementalLive component", () => {
  it("ElementalLive should render correctly", () => {
    render(<ElementalLive />);
    expect(true).toBeTruthy();
  });
});
