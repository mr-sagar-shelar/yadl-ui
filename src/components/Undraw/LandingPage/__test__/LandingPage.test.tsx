import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LandingPage from "../LandingPage";

describe("LandingPage component", () => {
  it("LandingPage should render correctly", () => {
    render(<LandingPage />);
    expect(true).toBeTruthy();
  });
});
