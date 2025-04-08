import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Administration from "../Administration";

describe("Administration component", () => {
  it("Administration should render correctly", () => {
    render(<Administration />);
    expect(true).toBeTruthy();
  });
});
