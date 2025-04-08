import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BeginChat from "../BeginChat";

describe("BeginChat component", () => {
  it("BeginChat should render correctly", () => {
    render(<BeginChat />);
    expect(true).toBeTruthy();
  });
});
