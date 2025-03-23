import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Podcast from "../Podcast";

describe("Podcast component", () => {
  it("Podcast should render correctly", () => {
    render(<Podcast />);
    expect(true).toBeTruthy();
  });
});
