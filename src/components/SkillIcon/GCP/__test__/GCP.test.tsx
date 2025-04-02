import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GCP from "../GCP";

describe("GCP component", () => {
  it("GCP should render correctly", () => {
    render(<GCP />);
    expect(true).toBeTruthy();
  });
});
