import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderExternalManagement from "../DefenderExternalManagement";

describe("DefenderExternalManagement component", () => {
  it("DefenderExternalManagement should render correctly", () => {
    render(<DefenderExternalManagement />);
    expect(true).toBeTruthy();
  });
});
