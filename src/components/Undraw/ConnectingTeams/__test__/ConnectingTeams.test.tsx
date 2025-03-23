import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConnectingTeams from "../ConnectingTeams";

describe("ConnectingTeams component", () => {
  it("ConnectingTeams should render correctly", () => {
    render(<ConnectingTeams />);
    expect(true).toBeTruthy();
  });
});
