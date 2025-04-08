import type { Meta, StoryObj } from "@storybook/react";
import LivePhoto from "../LivePhoto";

const meta: Meta<typeof LivePhoto> = { title: "unDraw/LivePhoto", component: LivePhoto };

export default meta;
type Story = StoryObj<typeof LivePhoto>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
