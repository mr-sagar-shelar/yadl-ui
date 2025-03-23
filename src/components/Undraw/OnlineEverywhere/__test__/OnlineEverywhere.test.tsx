import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineEverywhere from "../OnlineEverywhere";

describe("OnlineEverywhere component", () => {
  it("OnlineEverywhere should render correctly", () => {
    render(<OnlineEverywhere />);
    expect(true).toBeTruthy();
  });
});
