import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UpdateManagementCenter from "../UpdateManagementCenter";

describe("UpdateManagementCenter component", () => {
  it("UpdateManagementCenter should render correctly", () => {
    render(<UpdateManagementCenter />);
    expect(true).toBeTruthy();
  });
});
