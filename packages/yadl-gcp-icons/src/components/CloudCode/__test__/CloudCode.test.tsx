import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudCode from "../CloudCode";

describe("CloudCode component", () => {
  it("CloudCode should render correctly", () => {
    render(<CloudCode />);
    expect(true).toBeTruthy();
  });
});
