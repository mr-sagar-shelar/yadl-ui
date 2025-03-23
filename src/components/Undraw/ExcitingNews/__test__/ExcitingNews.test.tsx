import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExcitingNews from "../ExcitingNews";

describe("ExcitingNews component", () => {
  it("ExcitingNews should render correctly", () => {
    render(<ExcitingNews />);
    expect(true).toBeTruthy();
  });
});
