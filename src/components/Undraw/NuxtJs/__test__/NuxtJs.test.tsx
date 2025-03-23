import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NuxtJs from "../NuxtJs";

describe("NuxtJs component", () => {
  it("NuxtJs should render correctly", () => {
    render(<NuxtJs />);
    expect(true).toBeTruthy();
  });
});
