import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudComposer from "../CloudComposer";

describe("CloudComposer component", () => {
  it("CloudComposer should render correctly", () => {
    render(<CloudComposer />);
    expect(true).toBeTruthy();
  });
});
