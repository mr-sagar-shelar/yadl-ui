import type { Meta, StoryObj } from "@storybook/react";
import Buddies from "../Buddies";

const meta: Meta<typeof Buddies> = { title: "unDraw/Buddies", component: Buddies };

export default meta;
type Story = StoryObj<typeof Buddies>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
