import type { Meta, StoryObj } from "@storybook/react";
import OnlineResume from "../OnlineResume";

const meta: Meta<typeof OnlineResume> = { title: "unDraw/OnlineResume", component: OnlineResume };

export default meta;
type Story = StoryObj<typeof OnlineResume>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
