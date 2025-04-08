import type { Meta, StoryObj } from "@storybook/react";
import Bibliophile from "../Bibliophile";

const meta: Meta<typeof Bibliophile> = { title: "unDraw/Bibliophile", component: Bibliophile };

export default meta;
type Story = StoryObj<typeof Bibliophile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
