import type { Meta, StoryObj } from "@storybook/react";
import Community from "../Community";

const meta: Meta<typeof Community> = { title: "unDraw/Community", component: Community };

export default meta;
type Story = StoryObj<typeof Community>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
