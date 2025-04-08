import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConnectedWorldConnectedWorld from "../ConnectedWorldConnectedWorld";

describe("ConnectedWorldConnectedWorld component", () => {
  it("ConnectedWorldConnectedWorld should render correctly", () => {
    render(<ConnectedWorldConnectedWorld />);
    expect(true).toBeTruthy();
  });
});
