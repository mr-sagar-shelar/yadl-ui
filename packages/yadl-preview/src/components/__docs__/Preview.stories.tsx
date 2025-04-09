import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Preview from "../Preview";

const meta: Meta<typeof Preview> = {
  title: "Preview",
  component: Preview,
};

export default meta;
type Story = StoryObj<typeof Preview>;

export const Interactivity: Story = {
  args: {
    nodes: [
      {
        id: "1",
        data: { label: "Hello" },
        position: { x: 0, y: 0 },
        type: "input",
      },
      {
        id: "2",
        data: { label: "World" },
        position: { x: 100, y: 100 },
      },
      {
        id: "icon-0",
        position: {
          x: 0,
          y: 110,
        },
        data: {
          icon: "skillIconActivityPub",
          category: "skill",
        },
        type: "icon",
      },
    ],
    edges: [
      { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
      { id: "1-icon-0", source: "1", target: "icon-0", type: "step" },
    ],
  },
  render: (args) => (
    <div style={{ height: "100%", width: "100%" }}>
      <Preview {...args} />
    </div>
  ),
};
