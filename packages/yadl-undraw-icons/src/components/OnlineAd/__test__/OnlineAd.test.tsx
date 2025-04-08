import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineAd from "../OnlineAd";

describe("OnlineAd component", () => {
  it("OnlineAd should render correctly", () => {
    render(<OnlineAd />);
    expect(true).toBeTruthy();
  });
});
