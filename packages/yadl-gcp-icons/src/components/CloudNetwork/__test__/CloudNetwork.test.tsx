import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudNetwork from "../CloudNetwork";

describe("CloudNetwork component", () => {
  it("CloudNetwork should render correctly", () => {
    render(<CloudNetwork />);
    expect(true).toBeTruthy();
  });
});
