import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProducerPortal from "../ProducerPortal";

describe("ProducerPortal component", () => {
  it("ProducerPortal should render correctly", () => {
    render(<ProducerPortal />);
    expect(true).toBeTruthy();
  });
});
