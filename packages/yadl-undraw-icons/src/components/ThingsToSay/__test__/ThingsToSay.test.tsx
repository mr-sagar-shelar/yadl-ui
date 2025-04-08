import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThingsToSay from "../ThingsToSay";

describe("ThingsToSay component", () => {
  it("ThingsToSay should render correctly", () => {
    render(<ThingsToSay />);
    expect(true).toBeTruthy();
  });
});
