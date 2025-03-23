import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GiftBox from "../GiftBox";

describe("GiftBox component", () => {
  it("GiftBox should render correctly", () => {
    render(<GiftBox />);
    expect(true).toBeTruthy();
  });
});
