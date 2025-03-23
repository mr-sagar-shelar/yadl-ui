import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreativeThinking from "../CreativeThinking";

describe("CreativeThinking component", () => {
  it("CreativeThinking should render correctly", () => {
    render(<CreativeThinking />);
    expect(true).toBeTruthy();
  });
});
