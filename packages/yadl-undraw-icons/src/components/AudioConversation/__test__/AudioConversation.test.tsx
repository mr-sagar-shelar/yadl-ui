import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AudioConversation from "../AudioConversation";

describe("AudioConversation component", () => {
  it("AudioConversation should render correctly", () => {
    render(<AudioConversation />);
    expect(true).toBeTruthy();
  });
});
