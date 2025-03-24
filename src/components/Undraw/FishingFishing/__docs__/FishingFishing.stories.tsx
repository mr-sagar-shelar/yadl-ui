import type { Meta, StoryObj } from "@storybook/react";
import FishingFishing from "../FishingFishing";

const meta: Meta<typeof FishingFishing> = { title: "unDraw/FishingFishing", component: FishingFishing };

export default meta;
type Story = StoryObj<typeof FishingFishing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
