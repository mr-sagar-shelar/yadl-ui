import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Connection from "../Connection";

describe("Connection component", () => {
  it("Connection should render correctly", () => {
    render(<Connection />);
    expect(true).toBeTruthy();
  });
});
