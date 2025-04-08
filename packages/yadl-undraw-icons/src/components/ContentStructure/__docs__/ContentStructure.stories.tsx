import type { Meta, StoryObj } from "@storybook/react";
import ContentStructure from "../ContentStructure";

const meta: Meta<typeof ContentStructure> = { title: "unDraw/ContentStructure", component: ContentStructure };

export default meta;
type Story = StoryObj<typeof ContentStructure>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
