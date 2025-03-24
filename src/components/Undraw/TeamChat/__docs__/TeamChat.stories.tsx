import type { Meta, StoryObj } from "@storybook/react";
import TeamChat from "../TeamChat";

const meta: Meta<typeof TeamChat> = { title: "unDraw/TeamChat", component: TeamChat };

export default meta;
type Story = StoryObj<typeof TeamChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
