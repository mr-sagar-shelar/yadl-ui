import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GenomicsAccounts from "../GenomicsAccounts";

describe("GenomicsAccounts component", () => {
  it("GenomicsAccounts should render correctly", () => {
    render(<GenomicsAccounts />);
    expect(true).toBeTruthy();
  });
});
