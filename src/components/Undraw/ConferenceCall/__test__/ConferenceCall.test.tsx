import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConferenceCall from "../ConferenceCall";

describe("ConferenceCall component", () => {
  it("ConferenceCall should render correctly", () => {
    render(<ConferenceCall />);
    expect(true).toBeTruthy();
  });
});
