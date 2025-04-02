import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GitLab from "../GitLab";

describe("GitLab component", () => {
  it("GitLab should render correctly", () => {
    render(<GitLab />);
    expect(true).toBeTruthy();
  });
});
