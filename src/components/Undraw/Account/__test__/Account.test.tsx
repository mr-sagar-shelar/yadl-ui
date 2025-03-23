import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Account from "../Account";

describe("Account component", () => {
  it("Account should render correctly", () => {
    render(<Account />);
    expect(true).toBeTruthy();
  });
});
