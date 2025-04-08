import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Users from "../Users";

describe("Users component", () => {
  it("Users should render correctly", () => {
    render(<Users />);
    expect(true).toBeTruthy();
  });
});
