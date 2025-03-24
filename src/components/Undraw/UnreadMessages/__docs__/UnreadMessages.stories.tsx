import type { Meta, StoryObj } from "@storybook/react";
import UnreadMessages from "../UnreadMessages";

const meta: Meta<typeof UnreadMessages> = { title: "unDraw/UnreadMessages", component: UnreadMessages };

export default meta;
type Story = StoryObj<typeof UnreadMessages>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
