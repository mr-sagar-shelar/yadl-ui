import type { Meta, StoryObj } from "@storybook/react";
import Motherhood from "../Motherhood";

const meta: Meta<typeof Motherhood> = { title: "unDraw/Motherhood", component: Motherhood };

export default meta;
type Story = StoryObj<typeof Motherhood>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
