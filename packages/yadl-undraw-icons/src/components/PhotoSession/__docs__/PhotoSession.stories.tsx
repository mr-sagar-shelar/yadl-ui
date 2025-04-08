import type { Meta, StoryObj } from "@storybook/react";
import PhotoSession from "../PhotoSession";

const meta: Meta<typeof PhotoSession> = { title: "unDraw/PhotoSession", component: PhotoSession };

export default meta;
type Story = StoryObj<typeof PhotoSession>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
