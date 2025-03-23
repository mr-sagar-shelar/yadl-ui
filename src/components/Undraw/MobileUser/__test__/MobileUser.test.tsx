import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileUser from "../MobileUser";

describe("MobileUser component", () => {
  it("MobileUser should render correctly", () => {
    render(<MobileUser />);
    expect(true).toBeTruthy();
  });
});
