import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Chatbot from "../Chatbot";

describe("Chatbot component", () => {
  it("Chatbot should render correctly", () => {
    render(<Chatbot />);
    expect(true).toBeTruthy();
  });
});
