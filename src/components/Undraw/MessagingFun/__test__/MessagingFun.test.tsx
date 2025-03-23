import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MessagingFun from "../MessagingFun";

describe("MessagingFun component", () => {
  it("MessagingFun should render correctly", () => {
    render(<MessagingFun />);
    expect(true).toBeTruthy();
  });
});
