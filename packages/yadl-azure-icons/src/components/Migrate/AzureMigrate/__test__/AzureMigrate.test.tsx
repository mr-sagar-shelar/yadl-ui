import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureMigrate from "../AzureMigrate";

describe("AzureMigrate component", () => {
  it("AzureMigrate should render correctly", () => {
    render(<AzureMigrate />);
    expect(true).toBeTruthy();
  });
});
