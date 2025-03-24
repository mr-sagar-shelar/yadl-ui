import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AlexaForBusiness from "../AlexaForBusiness";

describe("AlexaForBusiness component", () => {
  it("AlexaForBusiness should render correctly", () => {
    render(<AlexaForBusiness />);
    expect(true).toBeTruthy();
  });
});
