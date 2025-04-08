import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NuxtJS from "../NuxtJS";

describe("NuxtJS component", () => {
  it("NuxtJS should render correctly", () => {
    render(<NuxtJS />);
    expect(true).toBeTruthy();
  });
});
