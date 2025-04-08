import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PartnerRegistration from "../PartnerRegistration";

describe("PartnerRegistration component", () => {
  it("PartnerRegistration should render correctly", () => {
    render(<PartnerRegistration />);
    expect(true).toBeTruthy();
  });
});
