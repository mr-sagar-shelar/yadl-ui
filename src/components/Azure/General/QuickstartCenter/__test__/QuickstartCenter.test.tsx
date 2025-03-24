import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QuickstartCenter from "../QuickstartCenter";

describe("QuickstartCenter component", () => {
  it("QuickstartCenter should render correctly", () => {
    render(<QuickstartCenter />);
    expect(true).toBeTruthy();
  });
});
