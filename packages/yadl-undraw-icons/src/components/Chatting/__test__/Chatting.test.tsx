import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Chatting from "../Chatting";

describe("Chatting component", () => {
  it("Chatting should render correctly", () => {
    render(<Chatting />);
    expect(true).toBeTruthy();
  });
});
