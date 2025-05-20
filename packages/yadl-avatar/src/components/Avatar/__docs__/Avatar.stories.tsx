import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../Avatar";

const meta: Meta<typeof Avatar> = { title: "AWS/Analytics/Avatar", component: Avatar };

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
