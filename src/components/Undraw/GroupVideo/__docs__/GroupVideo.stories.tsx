import type { Meta, StoryObj } from "@storybook/react";
import GroupVideo from "../GroupVideo";

const meta: Meta<typeof GroupVideo> = { title: "unDraw/GroupVideo", component: GroupVideo };

export default meta;
type Story = StoryObj<typeof GroupVideo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
