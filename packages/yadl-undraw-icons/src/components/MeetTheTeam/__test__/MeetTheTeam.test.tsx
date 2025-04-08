import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MeetTheTeam from "../MeetTheTeam";

describe("MeetTheTeam component", () => {
  it("MeetTheTeam should render correctly", () => {
    render(<MeetTheTeam />);
    expect(true).toBeTruthy();
  });
});
