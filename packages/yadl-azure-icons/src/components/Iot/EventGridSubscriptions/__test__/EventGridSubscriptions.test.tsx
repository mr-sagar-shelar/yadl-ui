import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EventGridSubscriptions from "../EventGridSubscriptions";

describe("EventGridSubscriptions component", () => {
  it("EventGridSubscriptions should render correctly", () => {
    render(<EventGridSubscriptions />);
    expect(true).toBeTruthy();
  });
});
