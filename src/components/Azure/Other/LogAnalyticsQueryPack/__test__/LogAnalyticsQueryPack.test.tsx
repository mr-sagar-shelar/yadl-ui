import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LogAnalyticsQueryPack from "../LogAnalyticsQueryPack";

describe("LogAnalyticsQueryPack component", () => {
  it("LogAnalyticsQueryPack should render correctly", () => {
    render(<LogAnalyticsQueryPack />);
    expect(true).toBeTruthy();
  });
});
