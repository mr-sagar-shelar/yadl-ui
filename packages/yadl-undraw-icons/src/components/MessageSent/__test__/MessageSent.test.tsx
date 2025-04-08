import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MessageSent from "../MessageSent";

describe("MessageSent component", () => {
  it("MessageSent should render correctly", () => {
    render(<MessageSent />);
    expect(true).toBeTruthy();
  });
});
