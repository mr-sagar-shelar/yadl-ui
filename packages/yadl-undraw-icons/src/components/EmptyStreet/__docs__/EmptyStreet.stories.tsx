import type { Meta, StoryObj } from "@storybook/react";
import EmptyStreet from "../EmptyStreet";

const meta: Meta<typeof EmptyStreet> = { title: "unDraw/EmptyStreet", component: EmptyStreet };

export default meta;
type Story = StoryObj<typeof EmptyStreet>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
