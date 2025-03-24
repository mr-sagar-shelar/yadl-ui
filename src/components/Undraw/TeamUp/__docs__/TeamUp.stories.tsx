import type { Meta, StoryObj } from "@storybook/react";
import TeamUp from "../TeamUp";

const meta: Meta<typeof TeamUp> = { title: "unDraw/TeamUp", component: TeamUp };

export default meta;
type Story = StoryObj<typeof TeamUp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
