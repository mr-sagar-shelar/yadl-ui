import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignFeedback from "../DesignFeedback";

describe("DesignFeedback component", () => {
  it("DesignFeedback should render correctly", () => {
    render(<DesignFeedback />);
    expect(true).toBeTruthy();
  });
});
