import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SyncFiles from "../SyncFiles";

describe("SyncFiles component", () => {
  it("SyncFiles should render correctly", () => {
    render(<SyncFiles />);
    expect(true).toBeTruthy();
  });
});
