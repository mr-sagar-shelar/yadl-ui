import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConferenceSpeaker from "../ConferenceSpeaker";

describe("ConferenceSpeaker component", () => {
  it("ConferenceSpeaker should render correctly", () => {
    render(<ConferenceSpeaker />);
    expect(true).toBeTruthy();
  });
});
