import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticJobAgents from "../ElasticJobAgents";

describe("ElasticJobAgents component", () => {
  it("ElasticJobAgents should render correctly", () => {
    render(<ElasticJobAgents />);
    expect(true).toBeTruthy();
  });
});
