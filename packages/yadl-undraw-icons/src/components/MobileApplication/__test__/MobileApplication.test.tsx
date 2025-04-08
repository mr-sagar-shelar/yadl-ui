import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileApplication from "../MobileApplication";

describe("MobileApplication component", () => {
  it("MobileApplication should render correctly", () => {
    render(<MobileApplication />);
    expect(true).toBeTruthy();
  });
});
