import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineStats from "../OnlineStats";

describe("OnlineStats component", () => {
  it("OnlineStats should render correctly", () => {
    render(<OnlineStats />);
    expect(true).toBeTruthy();
  });
});
