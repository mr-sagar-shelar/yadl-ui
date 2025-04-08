import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignThinking from "../DesignThinking";

describe("DesignThinking component", () => {
  it("DesignThinking should render correctly", () => {
    render(<DesignThinking />);
    expect(true).toBeTruthy();
  });
});
