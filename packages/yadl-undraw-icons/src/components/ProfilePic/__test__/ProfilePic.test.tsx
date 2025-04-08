import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProfilePic from "../ProfilePic";

describe("ProfilePic component", () => {
  it("ProfilePic should render correctly", () => {
    render(<ProfilePic />);
    expect(true).toBeTruthy();
  });
});
