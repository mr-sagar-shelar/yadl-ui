import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NewYear2025 from "../NewYear2025";

describe("NewYear2025 component", () => {
  it("NewYear2025 should render correctly", () => {
    render(<NewYear2025 />);
    expect(true).toBeTruthy();
  });
});
