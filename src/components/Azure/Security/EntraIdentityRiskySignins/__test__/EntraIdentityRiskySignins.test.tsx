import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraIdentityRiskySignins from "../EntraIdentityRiskySignins";

describe("EntraIdentityRiskySignins component", () => {
  it("EntraIdentityRiskySignins should render correctly", () => {
    render(<EntraIdentityRiskySignins />);
    expect(true).toBeTruthy();
  });
});
