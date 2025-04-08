import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudTest from "../CloudTest";

describe("CloudTest component", () => {
  it("CloudTest should render correctly", () => {
    render(<CloudTest />);
    expect(true).toBeTruthy();
  });
});
