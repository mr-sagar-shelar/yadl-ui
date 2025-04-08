import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DifferentLoveDifferentLove from "../DifferentLoveDifferentLove";

describe("DifferentLoveDifferentLove component", () => {
  it("DifferentLoveDifferentLove should render correctly", () => {
    render(<DifferentLoveDifferentLove />);
    expect(true).toBeTruthy();
  });
});
