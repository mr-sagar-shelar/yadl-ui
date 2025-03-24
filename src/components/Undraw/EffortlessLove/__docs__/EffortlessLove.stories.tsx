import type { Meta, StoryObj } from "@storybook/react";
import EffortlessLove from "../EffortlessLove";

const meta: Meta<typeof EffortlessLove> = { title: "unDraw/EffortlessLove", component: EffortlessLove };

export default meta;
type Story = StoryObj<typeof EffortlessLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
