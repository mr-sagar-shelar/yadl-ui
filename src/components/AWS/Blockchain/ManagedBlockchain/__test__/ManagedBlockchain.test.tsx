import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedBlockchain from "../ManagedBlockchain";

describe("ManagedBlockchain component", () => {
  it("ManagedBlockchain should render correctly", () => {
    render(<ManagedBlockchain />);
    expect(true).toBeTruthy();
  });
});
