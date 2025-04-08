import type { Meta, StoryObj } from "@storybook/react";
import TakingPhoto from "../TakingPhoto";

const meta: Meta<typeof TakingPhoto> = { title: "unDraw/TakingPhoto", component: TakingPhoto };

export default meta;
type Story = StoryObj<typeof TakingPhoto>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
