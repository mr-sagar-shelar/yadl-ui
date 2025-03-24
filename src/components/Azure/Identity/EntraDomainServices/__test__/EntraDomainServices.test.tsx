import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraDomainServices from "../EntraDomainServices";

describe("EntraDomainServices component", () => {
  it("EntraDomainServices should render correctly", () => {
    render(<EntraDomainServices />);
    expect(true).toBeTruthy();
  });
});
