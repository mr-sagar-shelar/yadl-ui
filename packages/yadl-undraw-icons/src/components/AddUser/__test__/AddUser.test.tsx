import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddUser from "../AddUser";

describe("AddUser component", () => {
  it("AddUser should render correctly", () => {
    render(<AddUser />);
    expect(true).toBeTruthy();
  });
});
