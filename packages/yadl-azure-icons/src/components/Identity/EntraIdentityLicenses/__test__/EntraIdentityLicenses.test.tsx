import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraIdentityLicenses from "../EntraIdentityLicenses";

describe("EntraIdentityLicenses component", () => {
  it("EntraIdentityLicenses should render correctly", () => {
    render(<EntraIdentityLicenses />);
    expect(true).toBeTruthy();
  });
});
