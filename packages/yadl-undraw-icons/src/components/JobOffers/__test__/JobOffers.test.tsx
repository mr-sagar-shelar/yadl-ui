import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JobOffers from "../JobOffers";

describe("JobOffers component", () => {
  it("JobOffers should render correctly", () => {
    render(<JobOffers />);
    expect(true).toBeTruthy();
  });
});
