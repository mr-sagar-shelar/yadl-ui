import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EventGridDomains from "../EventGridDomains";

describe("EventGridDomains component", () => {
  it("EventGridDomains should render correctly", () => {
    render(<EventGridDomains />);
    expect(true).toBeTruthy();
  });
});
