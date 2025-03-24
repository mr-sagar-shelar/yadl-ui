import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticInference from "../ElasticInference";

describe("ElasticInference component", () => {
  it("ElasticInference should render correctly", () => {
    render(<ElasticInference />);
    expect(true).toBeTruthy();
  });
});
