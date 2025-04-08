import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BotServices from "../BotServices";

describe("BotServices component", () => {
  it("BotServices should render correctly", () => {
    render(<BotServices />);
    expect(true).toBeTruthy();
  });
});
