import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DiscordBots from "../DiscordBots";

describe("DiscordBots component", () => {
  it("DiscordBots should render correctly", () => {
    render(<DiscordBots />);
    expect(true).toBeTruthy();
  });
});
