import type { Meta, StoryObj } from "@storybook/react";
import Photocopy from "../Photocopy";

const meta: Meta<typeof Photocopy> = { title: "unDraw/Photocopy", component: Photocopy };

export default meta;
type Story = StoryObj<typeof Photocopy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
