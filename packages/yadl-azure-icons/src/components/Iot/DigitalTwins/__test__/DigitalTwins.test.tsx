import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DigitalTwins from "../DigitalTwins";

describe("DigitalTwins component", () => {
  it("DigitalTwins should render correctly", () => {
    render(<DigitalTwins />);
    expect(true).toBeTruthy();
  });
});
