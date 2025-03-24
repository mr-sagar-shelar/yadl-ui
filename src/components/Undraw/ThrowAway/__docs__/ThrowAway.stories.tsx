import type { Meta, StoryObj } from "@storybook/react";
import ThrowAway from "../ThrowAway";

const meta: Meta<typeof ThrowAway> = { title: "unDraw/ThrowAway", component: ThrowAway };

export default meta;
type Story = StoryObj<typeof ThrowAway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
