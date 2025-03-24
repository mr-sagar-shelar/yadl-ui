import type { Meta, StoryObj } from "@storybook/react";
import Blogging from "../Blogging";

const meta: Meta<typeof Blogging> = { title: "unDraw/Blogging", component: Blogging };

export default meta;
type Story = StoryObj<typeof Blogging>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
