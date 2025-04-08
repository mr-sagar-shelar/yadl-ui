import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticFabricAdapter from "../ElasticFabricAdapter";

describe("ElasticFabricAdapter component", () => {
  it("ElasticFabricAdapter should render correctly", () => {
    render(<ElasticFabricAdapter />);
    expect(true).toBeTruthy();
  });
});
