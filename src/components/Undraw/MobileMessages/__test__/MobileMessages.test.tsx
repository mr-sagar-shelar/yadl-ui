import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileMessages from "../MobileMessages";

describe("MobileMessages component", () => {
  it("MobileMessages should render correctly", () => {
    render(<MobileMessages />);
    expect(true).toBeTruthy();
  });
});
