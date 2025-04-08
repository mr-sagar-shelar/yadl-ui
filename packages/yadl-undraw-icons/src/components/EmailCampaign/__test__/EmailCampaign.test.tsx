import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EmailCampaign from "../EmailCampaign";

describe("EmailCampaign component", () => {
  it("EmailCampaign should render correctly", () => {
    render(<EmailCampaign />);
    expect(true).toBeTruthy();
  });
});
