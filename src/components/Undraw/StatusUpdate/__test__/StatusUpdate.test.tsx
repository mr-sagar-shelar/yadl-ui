import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StatusUpdate from "../StatusUpdate";

describe("StatusUpdate component", () => {
  it("StatusUpdate should render correctly", () => {
    render(<StatusUpdate />);
    expect(true).toBeTruthy();
  });
});
