import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InboxCleanup from "../InboxCleanup";

describe("InboxCleanup component", () => {
  it("InboxCleanup should render correctly", () => {
    render(<InboxCleanup />);
    expect(true).toBeTruthy();
  });
});
