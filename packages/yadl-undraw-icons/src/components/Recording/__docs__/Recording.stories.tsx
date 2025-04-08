import type { Meta, StoryObj } from "@storybook/react";
import Recording from "../Recording";

const meta: Meta<typeof Recording> = { title: "unDraw/Recording", component: Recording };

export default meta;
type Story = StoryObj<typeof Recording>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
