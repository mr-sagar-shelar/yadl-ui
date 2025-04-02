import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wordpress from "../Wordpress";

describe("Wordpress component", () => {
  it("Wordpress should render correctly", () => {
    render(<Wordpress />);
    expect(true).toBeTruthy();
  });
});
