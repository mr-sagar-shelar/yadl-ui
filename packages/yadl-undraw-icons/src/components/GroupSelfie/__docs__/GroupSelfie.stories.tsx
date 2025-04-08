import type { Meta, StoryObj } from "@storybook/react";
import GroupSelfie from "../GroupSelfie";

const meta: Meta<typeof GroupSelfie> = { title: "unDraw/GroupSelfie", component: GroupSelfie };

export default meta;
type Story = StoryObj<typeof GroupSelfie>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
