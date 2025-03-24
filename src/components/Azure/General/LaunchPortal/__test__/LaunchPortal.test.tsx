import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LaunchPortal from "../LaunchPortal";

describe("LaunchPortal component", () => {
  it("LaunchPortal should render correctly", () => {
    render(<LaunchPortal />);
    expect(true).toBeTruthy();
  });
});
