import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedApplicationsCenter from "../ManagedApplicationsCenter";

describe("ManagedApplicationsCenter component", () => {
  it("ManagedApplicationsCenter should render correctly", () => {
    render(<ManagedApplicationsCenter />);
    expect(true).toBeTruthy();
  });
});
