import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ScheduleMeeting from "../ScheduleMeeting";

describe("ScheduleMeeting component", () => {
  it("ScheduleMeeting should render correctly", () => {
    render(<ScheduleMeeting />);
    expect(true).toBeTruthy();
  });
});
