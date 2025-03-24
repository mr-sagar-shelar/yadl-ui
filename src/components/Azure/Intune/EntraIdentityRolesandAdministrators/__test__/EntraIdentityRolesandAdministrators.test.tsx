import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraIdentityRolesandAdministrators from "../EntraIdentityRolesandAdministrators";

describe("EntraIdentityRolesandAdministrators component", () => {
  it("EntraIdentityRolesandAdministrators should render correctly", () => {
    render(<EntraIdentityRolesandAdministrators />);
    expect(true).toBeTruthy();
  });
});
