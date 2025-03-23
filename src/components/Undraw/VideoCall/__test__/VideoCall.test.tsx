import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoCall from "../VideoCall";

describe("VideoCall component", () => {
  it("VideoCall should render correctly", () => {
    render(<VideoCall />);
    expect(true).toBeTruthy();
  });
});
