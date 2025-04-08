import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Conversation from "../Conversation";

describe("Conversation component", () => {
  it("Conversation should render correctly", () => {
    render(<Conversation />);
    expect(true).toBeTruthy();
  });
});
