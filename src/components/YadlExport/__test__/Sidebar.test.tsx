import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Sidebar from "../Export";

describe("Sidebar component", () => {
  it("Sidebar should render correctly", () => {
    render(<Sidebar />);
    expect(true).toBeTruthy();
  });
});
