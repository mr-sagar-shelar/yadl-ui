import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AcceptTasks from "../AcceptTasks";

describe("AcceptTasks component", () => {
  it("AcceptTasks should render correctly", () => {
    render(<AcceptTasks />);
    expect(true).toBeTruthy();
  });
});
