import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EventHubs from "../EventHubs";

describe("EventHubs component", () => {
  it("EventHubs should render correctly", () => {
    render(<EventHubs />);
    expect(true).toBeTruthy();
  });
});
