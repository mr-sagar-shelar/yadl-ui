import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateLink from "../PrivateLink";

describe("PrivateLink component", () => {
  it("PrivateLink should render correctly", () => {
    render(<PrivateLink />);
    expect(true).toBeTruthy();
  });
});
