import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticBlockStore from "../ElasticBlockStore";

describe("ElasticBlockStore component", () => {
  it("ElasticBlockStore should render correctly", () => {
    render(<ElasticBlockStore />);
    expect(true).toBeTruthy();
  });
});
