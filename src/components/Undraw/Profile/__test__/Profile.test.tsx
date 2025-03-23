import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Profile from "../Profile";

describe("Profile component", () => {
  it("Profile should render correctly", () => {
    render(<Profile />);
    expect(true).toBeTruthy();
  });
});
