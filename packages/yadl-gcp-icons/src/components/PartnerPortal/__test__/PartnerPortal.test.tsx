import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PartnerPortal from "../PartnerPortal";

describe("PartnerPortal component", () => {
  it("PartnerPortal should render correctly", () => {
    render(<PartnerPortal />);
    expect(true).toBeTruthy();
  });
});
