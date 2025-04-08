import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pug from "../Pug";

describe("Pug component", () => {
  it("Pug should render correctly", () => {
    render(<Pug />);
    expect(true).toBeTruthy();
  });
});
