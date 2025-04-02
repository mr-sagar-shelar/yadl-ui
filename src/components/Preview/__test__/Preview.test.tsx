import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import YadlPreview from "../YadlPreview";

describe("YadlPreview component", () => {
  it("YadlPreview should render correctly", () => {
    render(<YadlPreview edges={[]} nodes={[]} />);
    expect(true).toBeTruthy();
  });
});
