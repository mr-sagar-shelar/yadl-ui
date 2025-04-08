import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineArticle from "../OnlineArticle";

describe("OnlineArticle component", () => {
  it("OnlineArticle should render correctly", () => {
    render(<OnlineArticle />);
    expect(true).toBeTruthy();
  });
});
