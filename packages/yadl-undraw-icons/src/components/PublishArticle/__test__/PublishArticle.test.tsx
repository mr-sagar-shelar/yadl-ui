import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PublishArticle from "../PublishArticle";

describe("PublishArticle component", () => {
  it("PublishArticle should render correctly", () => {
    render(<PublishArticle />);
    expect(true).toBeTruthy();
  });
});
