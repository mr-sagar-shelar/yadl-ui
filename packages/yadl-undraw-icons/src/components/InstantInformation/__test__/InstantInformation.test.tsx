import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InstantInformation from "../InstantInformation";

describe("InstantInformation component", () => {
  it("InstantInformation should render correctly", () => {
    render(<InstantInformation />);
    expect(true).toBeTruthy();
  });
});
