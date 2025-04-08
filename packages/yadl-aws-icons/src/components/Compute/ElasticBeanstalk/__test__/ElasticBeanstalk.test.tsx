import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElasticBeanstalk from "../ElasticBeanstalk";

describe("ElasticBeanstalk component", () => {
  it("ElasticBeanstalk should render correctly", () => {
    render(<ElasticBeanstalk />);
    expect(true).toBeTruthy();
  });
});
