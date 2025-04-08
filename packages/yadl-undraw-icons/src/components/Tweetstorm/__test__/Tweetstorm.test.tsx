import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tweetstorm from "../Tweetstorm";

describe("Tweetstorm component", () => {
  it("Tweetstorm should render correctly", () => {
    render(<Tweetstorm />);
    expect(true).toBeTruthy();
  });
});
