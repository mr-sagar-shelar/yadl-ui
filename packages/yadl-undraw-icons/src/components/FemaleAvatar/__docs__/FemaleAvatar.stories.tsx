import type { Meta, StoryObj } from "@storybook/react";
import FemaleAvatar from "../FemaleAvatar";

const meta: Meta<typeof FemaleAvatar> = { title: "unDraw/FemaleAvatar", component: FemaleAvatar };

export default meta;
type Story = StoryObj<typeof FemaleAvatar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
