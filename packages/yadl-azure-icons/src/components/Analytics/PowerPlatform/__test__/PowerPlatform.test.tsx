import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PowerPlatform from "../PowerPlatform";

describe("PowerPlatform component", () => {
  it("PowerPlatform should render correctly", () => {
    render(<PowerPlatform />);
    expect(true).toBeTruthy();
  });
});
