import type { Meta, StoryObj } from "@storybook/react";
import Starlink from "../Starlink";

const meta: Meta<typeof Starlink> = { title: "unDraw/Starlink", component: Starlink };

export default meta;
type Story = StoryObj<typeof Starlink>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
