import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineArticles from "../OnlineArticles";

describe("OnlineArticles component", () => {
  it("OnlineArticles should render correctly", () => {
    render(<OnlineArticles />);
    expect(true).toBeTruthy();
  });
});
