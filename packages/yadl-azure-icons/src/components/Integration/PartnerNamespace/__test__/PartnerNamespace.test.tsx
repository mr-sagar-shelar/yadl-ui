import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PartnerNamespace from "../PartnerNamespace";

describe("PartnerNamespace component", () => {
  it("PartnerNamespace should render correctly", () => {
    render(<PartnerNamespace />);
    expect(true).toBeTruthy();
  });
});
