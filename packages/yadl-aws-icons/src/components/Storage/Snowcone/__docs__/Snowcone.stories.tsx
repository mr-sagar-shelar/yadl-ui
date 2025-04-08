import type { Meta, StoryObj } from "@storybook/react";
import Snowcone from "../Snowcone";

const meta: Meta<typeof Snowcone> = { title: "AWS/Storage/Snowcone", component: Snowcone };

export default meta;
type Story = StoryObj<typeof Snowcone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
