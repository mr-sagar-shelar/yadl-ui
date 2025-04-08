import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RemoteTeam from "../RemoteTeam";

describe("RemoteTeam component", () => {
  it("RemoteTeam should render correctly", () => {
    render(<RemoteTeam />);
    expect(true).toBeTruthy();
  });
});
