import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LaravelAndVueLaravelAndVue from "../LaravelAndVueLaravelAndVue";

describe("LaravelAndVueLaravelAndVue component", () => {
  it("LaravelAndVueLaravelAndVue should render correctly", () => {
    render(<LaravelAndVueLaravelAndVue />);
    expect(true).toBeTruthy();
  });
});
