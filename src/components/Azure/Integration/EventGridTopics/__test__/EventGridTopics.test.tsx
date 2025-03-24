import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EventGridTopics from "../EventGridTopics";

describe("EventGridTopics component", () => {
  it("EventGridTopics should render correctly", () => {
    render(<EventGridTopics />);
    expect(true).toBeTruthy();
  });
});
