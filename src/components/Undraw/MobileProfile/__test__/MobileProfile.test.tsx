import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileProfile from "../MobileProfile";

describe("MobileProfile component", () => {
  it("MobileProfile should render correctly", () => {
    render(<MobileProfile />);
    expect(true).toBeTruthy();
  });
});
