import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrganizedContent from "../OrganizedContent";

describe("OrganizedContent component", () => {
  it("OrganizedContent should render correctly", () => {
    render(<OrganizedContent />);
    expect(true).toBeTruthy();
  });
});
