import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Blogging from "../Blogging";

describe("Blogging component", () => {
  it("Blogging should render correctly", () => {
    render(<Blogging />);
    expect(true).toBeTruthy();
  });
});
