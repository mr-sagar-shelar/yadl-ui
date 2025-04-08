import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticTranscoder from "../ElasticTranscoder";

describe("ElasticTranscoder component", () => {
  it("ElasticTranscoder should render correctly", () => {
    render(<ElasticTranscoder />);
    expect(true).toBeTruthy();
  });
});
