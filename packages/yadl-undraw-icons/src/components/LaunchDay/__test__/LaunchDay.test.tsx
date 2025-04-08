import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LaunchDay from "../LaunchDay";

describe("LaunchDay component", () => {
  it("LaunchDay should render correctly", () => {
    render(<LaunchDay />);
    expect(true).toBeTruthy();
  });
});
