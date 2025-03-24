import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Config from "../Config";

describe("Config component", () => {
  it("Config should render correctly", () => {
    render(<Config />);
    expect(true).toBeTruthy();
  });
});
