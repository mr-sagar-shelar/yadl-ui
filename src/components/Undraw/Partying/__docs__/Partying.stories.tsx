import type { Meta, StoryObj } from "@storybook/react";
import Partying from "../Partying";

const meta: Meta<typeof Partying> = { title: "unDraw/Partying", component: Partying };

export default meta;
type Story = StoryObj<typeof Partying>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
