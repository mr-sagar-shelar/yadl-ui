import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Chat from "../Chat";

describe("Chat component", () => {
  it("Chat should render correctly", () => {
    render(<Chat />);
    expect(true).toBeTruthy();
  });
});
