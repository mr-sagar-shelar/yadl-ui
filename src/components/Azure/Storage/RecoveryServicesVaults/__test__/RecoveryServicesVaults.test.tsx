import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RecoveryServicesVaults from "../RecoveryServicesVaults";

describe("RecoveryServicesVaults component", () => {
  it("RecoveryServicesVaults should render correctly", () => {
    render(<RecoveryServicesVaults />);
    expect(true).toBeTruthy();
  });
});
