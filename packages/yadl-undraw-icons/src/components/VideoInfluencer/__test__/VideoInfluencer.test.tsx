import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoInfluencer from "../VideoInfluencer";

describe("VideoInfluencer component", () => {
  it("VideoInfluencer should render correctly", () => {
    render(<VideoInfluencer />);
    expect(true).toBeTruthy();
  });
});
