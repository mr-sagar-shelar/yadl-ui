import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeCommit from "../CodeCommit";

describe("CodeCommit component", () => {
  it("CodeCommit should render correctly", () => {
    render(<CodeCommit />);
    expect(true).toBeTruthy();
  });
});
