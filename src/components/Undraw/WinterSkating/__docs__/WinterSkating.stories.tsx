import type { Meta, StoryObj } from "@storybook/react";
import WinterSkating from "../WinterSkating";

const meta: Meta<typeof WinterSkating> = { title: "unDraw/WinterSkating", component: WinterSkating };

export default meta;
type Story = StoryObj<typeof WinterSkating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
