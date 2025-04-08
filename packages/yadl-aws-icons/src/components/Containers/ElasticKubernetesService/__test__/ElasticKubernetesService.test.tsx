import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticKubernetesService from "../ElasticKubernetesService";

describe("ElasticKubernetesService component", () => {
  it("ElasticKubernetesService should render correctly", () => {
    render(<ElasticKubernetesService />);
    expect(true).toBeTruthy();
  });
});
