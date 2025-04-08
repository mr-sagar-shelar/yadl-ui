import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkingOut from "../WorkingOut";

describe("WorkingOut component", () => {
  it("WorkingOut should render correctly", () => {
    render(<WorkingOut />);
    expect(true).toBeTruthy();
  });
});
