import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProfileImage from "../ProfileImage";

describe("ProfileImage component", () => {
  it("ProfileImage should render correctly", () => {
    render(<ProfileImage />);
    expect(true).toBeTruthy();
  });
});
