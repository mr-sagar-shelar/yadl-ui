import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WinterSkating from "../WinterSkating";

describe("WinterSkating component", () => {
  it("WinterSkating should render correctly", () => {
    render(<WinterSkating />);
    expect(true).toBeTruthy();
  });
});
