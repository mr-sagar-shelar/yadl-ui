import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudTpu from "../CloudTpu";

describe("CloudTpu component", () => {
  it("CloudTpu should render correctly", () => {
    render(<CloudTpu />);
    expect(true).toBeTruthy();
  });
});
