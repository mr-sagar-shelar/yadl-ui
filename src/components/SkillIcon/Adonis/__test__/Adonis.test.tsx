import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Adonis from "../Adonis";

describe("Adonis component", () => {
  it("Adonis should render correctly", () => {
    render(<Adonis />);
    expect(true).toBeTruthy();
  });
});
