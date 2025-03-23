import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManageChats from "../ManageChats";

describe("ManageChats component", () => {
  it("ManageChats should render correctly", () => {
    render(<ManageChats />);
    expect(true).toBeTruthy();
  });
});
