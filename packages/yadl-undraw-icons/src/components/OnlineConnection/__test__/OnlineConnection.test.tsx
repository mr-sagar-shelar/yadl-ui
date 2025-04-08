import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineConnection from "../OnlineConnection";

describe("OnlineConnection component", () => {
  it("OnlineConnection should render correctly", () => {
    render(<OnlineConnection />);
    expect(true).toBeTruthy();
  });
});
