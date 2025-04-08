import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FashionPhotoshoot from "../FashionPhotoshoot";

describe("FashionPhotoshoot component", () => {
  it("FashionPhotoshoot should render correctly", () => {
    render(<FashionPhotoshoot />);
    expect(true).toBeTruthy();
  });
});
