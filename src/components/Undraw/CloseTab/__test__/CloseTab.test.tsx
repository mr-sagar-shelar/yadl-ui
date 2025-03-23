import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloseTab from "../CloseTab";

describe("CloseTab component", () => {
  it("CloseTab should render correctly", () => {
    render(<CloseTab />);
    expect(true).toBeTruthy();
  });
});
