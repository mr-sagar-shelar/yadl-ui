import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Download from "../Download";

describe("Download component", () => {
  it("Download should render correctly", () => {
    render(<Download />);
    expect(true).toBeTruthy();
  });
});
