import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DiscordJS from "../DiscordJS";

describe("DiscordJS component", () => {
  it("DiscordJS should render correctly", () => {
    render(<DiscordJS />);
    expect(true).toBeTruthy();
  });
});
