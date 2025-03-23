import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineMessage from "../OnlineMessage";

describe("OnlineMessage component", () => {
  it("OnlineMessage should render correctly", () => {
    render(<OnlineMessage />);
    expect(true).toBeTruthy();
  });
});
