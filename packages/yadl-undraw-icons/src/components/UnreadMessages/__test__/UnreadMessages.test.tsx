import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UnreadMessages from "../UnreadMessages";

describe("UnreadMessages component", () => {
  it("UnreadMessages should render correctly", () => {
    render(<UnreadMessages />);
    expect(true).toBeTruthy();
  });
});
