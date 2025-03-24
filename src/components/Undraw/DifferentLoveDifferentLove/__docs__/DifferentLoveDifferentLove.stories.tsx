import type { Meta, StoryObj } from "@storybook/react";
import DifferentLoveDifferentLove from "../DifferentLoveDifferentLove";

const meta: Meta<typeof DifferentLoveDifferentLove> = { title: "unDraw/DifferentLoveDifferentLove", component: DifferentLoveDifferentLove };

export default meta;
type Story = StoryObj<typeof DifferentLoveDifferentLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
