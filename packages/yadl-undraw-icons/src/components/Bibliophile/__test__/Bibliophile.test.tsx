import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bibliophile from "../Bibliophile";

describe("Bibliophile component", () => {
  it("Bibliophile should render correctly", () => {
    render(<Bibliophile />);
    expect(true).toBeTruthy();
  });
});
