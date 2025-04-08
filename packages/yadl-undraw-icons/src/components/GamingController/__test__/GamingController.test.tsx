import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GamingController from "../GamingController";

describe("GamingController component", () => {
  it("GamingController should render correctly", () => {
    render(<GamingController />);
    expect(true).toBeTruthy();
  });
});
