import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QuickChat from "../QuickChat";

describe("QuickChat component", () => {
  it("QuickChat should render correctly", () => {
    render(<QuickChat />);
    expect(true).toBeTruthy();
  });
});
