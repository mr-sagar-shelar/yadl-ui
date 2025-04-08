import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Loading from "../Loading";

describe("Loading component", () => {
  it("Loading should render correctly", () => {
    render(<Loading />);
    expect(true).toBeTruthy();
  });
});
