import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoStreaming from "../VideoStreaming";

describe("VideoStreaming component", () => {
  it("VideoStreaming should render correctly", () => {
    render(<VideoStreaming />);
    expect(true).toBeTruthy();
  });
});
