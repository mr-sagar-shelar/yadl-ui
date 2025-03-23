import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SharingArticles from "../SharingArticles";

describe("SharingArticles component", () => {
  it("SharingArticles should render correctly", () => {
    render(<SharingArticles />);
    expect(true).toBeTruthy();
  });
});
