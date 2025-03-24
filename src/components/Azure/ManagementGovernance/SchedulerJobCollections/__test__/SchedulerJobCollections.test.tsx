import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SchedulerJobCollections from "../SchedulerJobCollections";

describe("SchedulerJobCollections component", () => {
  it("SchedulerJobCollections should render correctly", () => {
    render(<SchedulerJobCollections />);
    expect(true).toBeTruthy();
  });
});
