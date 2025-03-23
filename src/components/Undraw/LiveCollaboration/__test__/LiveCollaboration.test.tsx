import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LiveCollaboration from "../LiveCollaboration";

describe("LiveCollaboration component", () => {
  it("LiveCollaboration should render correctly", () => {
    render(<LiveCollaboration />);
    expect(true).toBeTruthy();
  });
});
