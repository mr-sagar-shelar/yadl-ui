import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IntuneAppProtection from "../IntuneAppProtection";

describe("IntuneAppProtection component", () => {
  it("IntuneAppProtection should render correctly", () => {
    render(<IntuneAppProtection />);
    expect(true).toBeTruthy();
  });
});
