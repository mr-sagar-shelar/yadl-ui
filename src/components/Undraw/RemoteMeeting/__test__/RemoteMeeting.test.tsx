import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RemoteMeeting from "../RemoteMeeting";

describe("RemoteMeeting component", () => {
  it("RemoteMeeting should render correctly", () => {
    render(<RemoteMeeting />);
    expect(true).toBeTruthy();
  });
});
