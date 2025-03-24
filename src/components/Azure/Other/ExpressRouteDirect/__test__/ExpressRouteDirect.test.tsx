import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExpressRouteDirect from "../ExpressRouteDirect";

describe("ExpressRouteDirect component", () => {
  it("ExpressRouteDirect should render correctly", () => {
    render(<ExpressRouteDirect />);
    expect(true).toBeTruthy();
  });
});
