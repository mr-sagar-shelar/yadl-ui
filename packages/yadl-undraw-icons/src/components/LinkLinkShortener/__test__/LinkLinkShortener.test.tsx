import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LinkLinkShortener from "../LinkLinkShortener";

describe("LinkLinkShortener component", () => {
  it("LinkLinkShortener should render correctly", () => {
    render(<LinkLinkShortener />);
    expect(true).toBeTruthy();
  });
});
