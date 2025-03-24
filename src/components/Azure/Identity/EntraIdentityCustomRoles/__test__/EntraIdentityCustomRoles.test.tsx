import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraIdentityCustomRoles from "../EntraIdentityCustomRoles";

describe("EntraIdentityCustomRoles component", () => {
  it("EntraIdentityCustomRoles should render correctly", () => {
    render(<EntraIdentityCustomRoles />);
    expect(true).toBeTruthy();
  });
});
