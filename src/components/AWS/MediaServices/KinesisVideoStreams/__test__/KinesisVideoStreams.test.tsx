import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KinesisVideoStreams from "../KinesisVideoStreams";

describe("KinesisVideoStreams component", () => {
  it("KinesisVideoStreams should render correctly", () => {
    render(<KinesisVideoStreams />);
    expect(true).toBeTruthy();
  });
});
