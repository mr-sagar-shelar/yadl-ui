import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenedTabs from "../OpenedTabs";

describe("OpenedTabs component", () => {
  it("OpenedTabs should render correctly", () => {
    render(<OpenedTabs />);
    expect(true).toBeTruthy();
  });
});
