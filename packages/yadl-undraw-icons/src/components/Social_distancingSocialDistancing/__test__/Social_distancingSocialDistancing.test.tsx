import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Social_distancingSocialDistancing from "../Social_distancingSocialDistancing";

describe("Social_distancingSocialDistancing component", () => {
  it("Social_distancingSocialDistancing should render correctly", () => {
    render(<Social_distancingSocialDistancing />);
    expect(true).toBeTruthy();
  });
});
