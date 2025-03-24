import type { Meta, StoryObj } from "@storybook/react";
import VisionaryTechnology from "../VisionaryTechnology";

const meta: Meta<typeof VisionaryTechnology> = { title: "unDraw/VisionaryTechnology", component: VisionaryTechnology };

export default meta;
type Story = StoryObj<typeof VisionaryTechnology>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
