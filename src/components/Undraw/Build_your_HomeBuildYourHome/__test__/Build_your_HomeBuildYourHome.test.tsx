import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Build_your_HomeBuildYourHome from "../Build_your_HomeBuildYourHome";

describe("Build_your_HomeBuildYourHome component", () => {
  it("Build_your_HomeBuildYourHome should render correctly", () => {
    render(<Build_your_HomeBuildYourHome />);
    expect(true).toBeTruthy();
  });
});
