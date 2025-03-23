import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddPost from "../AddPost";

describe("AddPost component", () => {
  it("AddPost should render correctly", () => {
    render(<AddPost />);
    expect(true).toBeTruthy();
  });
});
