import type { Meta, StoryObj } from "@storybook/react";
import ContentCreator from "../ContentCreator";

const meta: Meta<typeof ContentCreator> = { title: "unDraw/ContentCreator", component: ContentCreator };

export default meta;
type Story = StoryObj<typeof ContentCreator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
