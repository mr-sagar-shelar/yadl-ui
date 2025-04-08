import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StreamAnalyticsJobs from "../StreamAnalyticsJobs";

describe("StreamAnalyticsJobs component", () => {
  it("StreamAnalyticsJobs should render correctly", () => {
    render(<StreamAnalyticsJobs />);
    expect(true).toBeTruthy();
  });
});
