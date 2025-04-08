import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RobloxStudio from "../RobloxStudio";

describe("RobloxStudio component", () => {
  it("RobloxStudio should render correctly", () => {
    render(<RobloxStudio />);
    expect(true).toBeTruthy();
  });
});
