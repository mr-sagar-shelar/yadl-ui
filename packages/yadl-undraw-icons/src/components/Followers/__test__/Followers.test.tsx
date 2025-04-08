import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Followers from "../Followers";

describe("Followers component", () => {
  it("Followers should render correctly", () => {
    render(<Followers />);
    expect(true).toBeTruthy();
  });
});
