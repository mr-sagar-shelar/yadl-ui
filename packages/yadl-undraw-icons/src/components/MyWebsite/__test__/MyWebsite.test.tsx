import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyWebsite from "../MyWebsite";

describe("MyWebsite component", () => {
  it("MyWebsite should render correctly", () => {
    render(<MyWebsite />);
    expect(true).toBeTruthy();
  });
});
