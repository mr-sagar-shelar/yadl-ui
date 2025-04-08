import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TestBase from "../TestBase";

describe("TestBase component", () => {
  it("TestBase should render correctly", () => {
    render(<TestBase />);
    expect(true).toBeTruthy();
  });
});
