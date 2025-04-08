import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationComposer from "../ApplicationComposer";

describe("ApplicationComposer component", () => {
  it("ApplicationComposer should render correctly", () => {
    render(<ApplicationComposer />);
    expect(true).toBeTruthy();
  });
});
