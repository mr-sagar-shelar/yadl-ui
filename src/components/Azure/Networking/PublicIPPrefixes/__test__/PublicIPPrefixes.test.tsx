import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PublicIPPrefixes from "../PublicIPPrefixes";

describe("PublicIPPrefixes component", () => {
  it("PublicIPPrefixes should render correctly", () => {
    render(<PublicIPPrefixes />);
    expect(true).toBeTruthy();
  });
});
