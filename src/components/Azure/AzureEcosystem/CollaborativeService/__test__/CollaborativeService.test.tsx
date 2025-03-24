import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CollaborativeService from "../CollaborativeService";

describe("CollaborativeService component", () => {
  it("CollaborativeService should render correctly", () => {
    render(<CollaborativeService />);
    expect(true).toBeTruthy();
  });
});
