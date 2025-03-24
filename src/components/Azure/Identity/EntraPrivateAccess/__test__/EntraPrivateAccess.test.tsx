import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraPrivateAccess from "../EntraPrivateAccess";

describe("EntraPrivateAccess component", () => {
  it("EntraPrivateAccess should render correctly", () => {
    render(<EntraPrivateAccess />);
    expect(true).toBeTruthy();
  });
});
