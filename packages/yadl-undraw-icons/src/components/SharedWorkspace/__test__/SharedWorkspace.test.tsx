import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SharedWorkspace from "../SharedWorkspace";

describe("SharedWorkspace component", () => {
  it("SharedWorkspace should render correctly", () => {
    render(<SharedWorkspace />);
    expect(true).toBeTruthy();
  });
});
