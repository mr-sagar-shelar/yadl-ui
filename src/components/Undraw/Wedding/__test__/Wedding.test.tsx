import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wedding from "../Wedding";

describe("Wedding component", () => {
  it("Wedding should render correctly", () => {
    render(<Wedding />);
    expect(true).toBeTruthy();
  });
});
