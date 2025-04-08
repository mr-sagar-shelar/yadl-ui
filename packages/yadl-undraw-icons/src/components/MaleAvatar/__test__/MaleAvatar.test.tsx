import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MaleAvatar from "../MaleAvatar";

describe("MaleAvatar component", () => {
  it("MaleAvatar should render correctly", () => {
    render(<MaleAvatar />);
    expect(true).toBeTruthy();
  });
});
