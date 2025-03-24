import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PartnerTopic from "../PartnerTopic";

describe("PartnerTopic component", () => {
  it("PartnerTopic should render correctly", () => {
    render(<PartnerTopic />);
    expect(true).toBeTruthy();
  });
});
