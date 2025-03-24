import type { Meta, StoryObj } from "@storybook/react";
import Website from "../Website";

const meta: Meta<typeof Website> = { title: "unDraw/Website", component: Website };

export default meta;
type Story = StoryObj<typeof Website>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
