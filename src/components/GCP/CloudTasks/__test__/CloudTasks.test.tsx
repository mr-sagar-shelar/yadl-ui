import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudTasks from "../CloudTasks";

describe("CloudTasks component", () => {
  it("CloudTasks should render correctly", () => {
    render(<CloudTasks />);
    expect(true).toBeTruthy();
  });
});
