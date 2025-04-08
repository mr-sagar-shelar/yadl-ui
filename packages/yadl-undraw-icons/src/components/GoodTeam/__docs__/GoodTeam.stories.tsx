import type { Meta, StoryObj } from "@storybook/react";
import GoodTeam from "../GoodTeam";

const meta: Meta<typeof GoodTeam> = { title: "unDraw/GoodTeam", component: GoodTeam };

export default meta;
type Story = StoryObj<typeof GoodTeam>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
