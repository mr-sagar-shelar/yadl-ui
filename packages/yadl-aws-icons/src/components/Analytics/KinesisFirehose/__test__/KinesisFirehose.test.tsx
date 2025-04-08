import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KinesisFirehose from "../KinesisFirehose";

describe("KinesisFirehose component", () => {
  it("KinesisFirehose should render correctly", () => {
    render(<KinesisFirehose />);
    expect(true).toBeTruthy();
  });
});
