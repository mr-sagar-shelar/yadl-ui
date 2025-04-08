import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FinanceGuyAvatar from "../FinanceGuyAvatar";

describe("FinanceGuyAvatar component", () => {
  it("FinanceGuyAvatar should render correctly", () => {
    render(<FinanceGuyAvatar />);
    expect(true).toBeTruthy();
  });
});
