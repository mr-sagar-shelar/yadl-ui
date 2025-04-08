import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PodcastAudience from "../PodcastAudience";

describe("PodcastAudience component", () => {
  it("PodcastAudience should render correctly", () => {
    render(<PodcastAudience />);
    expect(true).toBeTruthy();
  });
});
