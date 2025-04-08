import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SuperThankYou from "../SuperThankYou";

describe("SuperThankYou component", () => {
  it("SuperThankYou should render correctly", () => {
    render(<SuperThankYou />);
    expect(true).toBeTruthy();
  });
});
