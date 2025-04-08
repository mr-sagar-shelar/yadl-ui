import type { Meta, StoryObj } from "@storybook/react";
import GamerNinja from "../GamerNinja";

const meta: Meta<typeof GamerNinja> = { title: "unDraw/GamerNinja", component: GamerNinja };

export default meta;
type Story = StoryObj<typeof GamerNinja>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
