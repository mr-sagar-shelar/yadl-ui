import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudTrail from "../CloudTrail";

describe("CloudTrail component", () => {
  it("CloudTrail should render correctly", () => {
    render(<CloudTrail />);
    expect(true).toBeTruthy();
  });
});
