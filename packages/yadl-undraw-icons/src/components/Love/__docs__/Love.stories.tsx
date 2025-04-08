import type { Meta, StoryObj } from "@storybook/react";
import Love from "../Love";

const meta: Meta<typeof Love> = { title: "unDraw/Love", component: Love };

export default meta;
type Story = StoryObj<typeof Love>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
