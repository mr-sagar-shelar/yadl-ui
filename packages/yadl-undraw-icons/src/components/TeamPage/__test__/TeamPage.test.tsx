import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TeamPage from "../TeamPage";

describe("TeamPage component", () => {
  it("TeamPage should render correctly", () => {
    render(<TeamPage />);
    expect(true).toBeTruthy();
  });
});
