import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalMediaLive from "../ElementalMediaLive";

describe("ElementalMediaLive component", () => {
  it("ElementalMediaLive should render correctly", () => {
    render(<ElementalMediaLive />);
    expect(true).toBeTruthy();
  });
});
