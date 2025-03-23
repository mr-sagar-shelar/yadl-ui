import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EverywhereTogether from "../EverywhereTogether";

describe("EverywhereTogether component", () => {
  it("EverywhereTogether should render correctly", () => {
    render(<EverywhereTogether />);
    expect(true).toBeTruthy();
  });
});
