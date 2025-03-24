import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KinesisDataStreams from "../KinesisDataStreams";

describe("KinesisDataStreams component", () => {
  it("KinesisDataStreams should render correctly", () => {
    render(<KinesisDataStreams />);
    expect(true).toBeTruthy();
  });
});
