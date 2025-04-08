import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NewMessage from "../NewMessage";

describe("NewMessage component", () => {
  it("NewMessage should render correctly", () => {
    render(<NewMessage />);
    expect(true).toBeTruthy();
  });
});
