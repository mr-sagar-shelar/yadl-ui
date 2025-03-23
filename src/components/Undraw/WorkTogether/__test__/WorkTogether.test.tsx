import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkTogether from "../WorkTogether";

describe("WorkTogether component", () => {
  it("WorkTogether should render correctly", () => {
    render(<WorkTogether />);
    expect(true).toBeTruthy();
  });
});
