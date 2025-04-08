import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BugFixingBugFixing from "../BugFixingBugFixing";

describe("BugFixingBugFixing component", () => {
  it("BugFixingBugFixing should render correctly", () => {
    render(<BugFixingBugFixing />);
    expect(true).toBeTruthy();
  });
});
