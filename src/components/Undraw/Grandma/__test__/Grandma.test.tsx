import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Grandma from "../Grandma";

describe("Grandma component", () => {
  it("Grandma should render correctly", () => {
    render(<Grandma />);
    expect(true).toBeTruthy();
  });
});
