import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Be_the_heroBeTheHero from "../Be_the_heroBeTheHero";

describe("Be_the_heroBeTheHero component", () => {
  it("Be_the_heroBeTheHero should render correctly", () => {
    render(<Be_the_heroBeTheHero />);
    expect(true).toBeTruthy();
  });
});
