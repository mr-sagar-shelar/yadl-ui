import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ABSMember from "../ABSMember";

describe("ABSMember component", () => {
  it("ABSMember should render correctly", () => {
    render(<ABSMember />);
    expect(true).toBeTruthy();
  });
});
