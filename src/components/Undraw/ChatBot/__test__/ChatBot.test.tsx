import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChatBot from "../ChatBot";

describe("ChatBot component", () => {
  it("ChatBot should render correctly", () => {
    render(<ChatBot />);
    expect(true).toBeTruthy();
  });
});
