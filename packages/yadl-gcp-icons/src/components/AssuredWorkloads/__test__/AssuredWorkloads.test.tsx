import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AssuredWorkloads from "../AssuredWorkloads";

describe("AssuredWorkloads component", () => {
  it("AssuredWorkloads should render correctly", () => {
    render(<AssuredWorkloads />);
    expect(true).toBeTruthy();
  });
});
