import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PodcastListener from "../PodcastListener";

describe("PodcastListener component", () => {
  it("PodcastListener should render correctly", () => {
    render(<PodcastListener />);
    expect(true).toBeTruthy();
  });
});
