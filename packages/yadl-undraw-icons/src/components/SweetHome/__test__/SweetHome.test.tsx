import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SweetHome from "../SweetHome";

describe("SweetHome component", () => {
  it("SweetHome should render correctly", () => {
    render(<SweetHome />);
    expect(true).toBeTruthy();
  });
});
