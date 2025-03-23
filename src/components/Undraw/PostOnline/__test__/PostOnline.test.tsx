import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PostOnline from "../PostOnline";

describe("PostOnline component", () => {
  it("PostOnline should render correctly", () => {
    render(<PostOnline />);
    expect(true).toBeTruthy();
  });
});
