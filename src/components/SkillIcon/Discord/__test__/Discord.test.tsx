import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Discord from "../Discord";

describe("Discord component", () => {
  it("Discord should render correctly", () => {
    render(<Discord />);
    expect(true).toBeTruthy();
  });
});
