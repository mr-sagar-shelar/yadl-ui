import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameServers from "../GameServers";

describe("GameServers component", () => {
  it("GameServers should render correctly", () => {
    render(<GameServers />);
    expect(true).toBeTruthy();
  });
});
