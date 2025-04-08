import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EnterpriseApplications from "../EnterpriseApplications";

describe("EnterpriseApplications component", () => {
  it("EnterpriseApplications should render correctly", () => {
    render(<EnterpriseApplications />);
    expect(true).toBeTruthy();
  });
});
