import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SmallTown from "../SmallTown";

describe("SmallTown component", () => {
  it("SmallTown should render correctly", () => {
    render(<SmallTown />);
    expect(true).toBeTruthy();
  });
});
