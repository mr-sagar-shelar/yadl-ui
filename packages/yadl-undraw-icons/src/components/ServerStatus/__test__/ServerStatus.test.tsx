import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServerStatus from "../ServerStatus";

describe("ServerStatus component", () => {
  it("ServerStatus should render correctly", () => {
    render(<ServerStatus />);
    expect(true).toBeTruthy();
  });
});
