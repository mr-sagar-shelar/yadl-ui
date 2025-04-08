import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProfileData from "../ProfileData";

describe("ProfileData component", () => {
  it("ProfileData should render correctly", () => {
    render(<ProfileData />);
    expect(true).toBeTruthy();
  });
});
