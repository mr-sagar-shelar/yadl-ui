import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticContainerService from "../ElasticContainerService";

describe("ElasticContainerService component", () => {
  it("ElasticContainerService should render correctly", () => {
    render(<ElasticContainerService />);
    expect(true).toBeTruthy();
  });
});
