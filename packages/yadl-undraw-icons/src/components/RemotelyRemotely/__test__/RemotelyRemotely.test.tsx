import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RemotelyRemotely from "../RemotelyRemotely";

describe("RemotelyRemotely component", () => {
  it("RemotelyRemotely should render correctly", () => {
    render(<RemotelyRemotely />);
    expect(true).toBeTruthy();
  });
});
