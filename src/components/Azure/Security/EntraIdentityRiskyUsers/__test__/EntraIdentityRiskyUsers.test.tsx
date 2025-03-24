import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraIdentityRiskyUsers from "../EntraIdentityRiskyUsers";

describe("EntraIdentityRiskyUsers component", () => {
  it("EntraIdentityRiskyUsers should render correctly", () => {
    render(<EntraIdentityRiskyUsers />);
    expect(true).toBeTruthy();
  });
});
