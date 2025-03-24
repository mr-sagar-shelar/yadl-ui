import type { Meta, StoryObj } from "@storybook/react";
import Blooming from "../Blooming";

const meta: Meta<typeof Blooming> = { title: "unDraw/Blooming", component: Blooming };

export default meta;
type Story = StoryObj<typeof Blooming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
