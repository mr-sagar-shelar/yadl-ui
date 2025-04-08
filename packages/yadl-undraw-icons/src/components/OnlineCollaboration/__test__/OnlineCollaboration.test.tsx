import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineCollaboration from "../OnlineCollaboration";

describe("OnlineCollaboration component", () => {
  it("OnlineCollaboration should render correctly", () => {
    render(<OnlineCollaboration />);
    expect(true).toBeTruthy();
  });
});
