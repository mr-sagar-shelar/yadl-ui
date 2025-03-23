import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Special_eventSpecialEvent from "../Special_eventSpecialEvent";

describe("Special_eventSpecialEvent component", () => {
  it("Special_eventSpecialEvent should render correctly", () => {
    render(<Special_eventSpecialEvent />);
    expect(true).toBeTruthy();
  });
});
