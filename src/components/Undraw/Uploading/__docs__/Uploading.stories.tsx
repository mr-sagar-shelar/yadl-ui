import type { Meta, StoryObj } from "@storybook/react";
import Uploading from "../Uploading";

const meta: Meta<typeof Uploading> = { title: "unDraw/Uploading", component: Uploading };

export default meta;
type Story = StoryObj<typeof Uploading>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
