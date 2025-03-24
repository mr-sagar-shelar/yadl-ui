import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Astro from "../Astro";

describe("Astro component", () => {
  it("Astro should render correctly", () => {
    render(<Astro />);
    expect(true).toBeTruthy();
  });
});
