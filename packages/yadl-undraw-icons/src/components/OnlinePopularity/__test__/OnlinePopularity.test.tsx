import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlinePopularity from "../OnlinePopularity";

describe("OnlinePopularity component", () => {
  it("OnlinePopularity should render correctly", () => {
    render(<OnlinePopularity />);
    expect(true).toBeTruthy();
  });
});
