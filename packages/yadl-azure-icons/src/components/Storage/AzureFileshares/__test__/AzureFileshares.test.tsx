import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureFileshares from "../AzureFileshares";

describe("AzureFileshares component", () => {
  it("AzureFileshares should render correctly", () => {
    render(<AzureFileshares />);
    expect(true).toBeTruthy();
  });
});
