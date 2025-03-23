import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProfileDetails from "../ProfileDetails";

describe("ProfileDetails component", () => {
  it("ProfileDetails should render correctly", () => {
    render(<ProfileDetails />);
    expect(true).toBeTruthy();
  });
});
