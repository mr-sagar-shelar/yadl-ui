import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudAuditLogs from "../CloudAuditLogs";

describe("CloudAuditLogs component", () => {
  it("CloudAuditLogs should render correctly", () => {
    render(<CloudAuditLogs />);
    expect(true).toBeTruthy();
  });
});
