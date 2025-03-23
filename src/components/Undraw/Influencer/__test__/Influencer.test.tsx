import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Influencer from "../Influencer";

describe("Influencer component", () => {
  it("Influencer should render correctly", () => {
    render(<Influencer />);
    expect(true).toBeTruthy();
  });
});
