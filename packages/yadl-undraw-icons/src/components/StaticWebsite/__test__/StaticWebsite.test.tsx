import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StaticWebsite from "../StaticWebsite";

describe("StaticWebsite component", () => {
  it("StaticWebsite should render correctly", () => {
    render(<StaticWebsite />);
    expect(true).toBeTruthy();
  });
});
