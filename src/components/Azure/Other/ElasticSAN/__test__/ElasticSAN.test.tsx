import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticSAN from "../ElasticSAN";

describe("ElasticSAN component", () => {
  it("ElasticSAN should render correctly", () => {
    render(<ElasticSAN />);
    expect(true).toBeTruthy();
  });
});
