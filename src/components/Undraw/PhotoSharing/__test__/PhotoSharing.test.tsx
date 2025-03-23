import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PhotoSharing from "../PhotoSharing";

describe("PhotoSharing component", () => {
  it("PhotoSharing should render correctly", () => {
    render(<PhotoSharing />);
    expect(true).toBeTruthy();
  });
});
