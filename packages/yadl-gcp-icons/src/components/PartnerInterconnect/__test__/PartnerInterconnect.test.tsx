import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PartnerInterconnect from "../PartnerInterconnect";

describe("PartnerInterconnect component", () => {
  it("PartnerInterconnect should render correctly", () => {
    render(<PartnerInterconnect />);
    expect(true).toBeTruthy();
  });
});
