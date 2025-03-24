import type { Meta, StoryObj } from "@storybook/react";
import UpToDate from "../UpToDate";

const meta: Meta<typeof UpToDate> = { title: "unDraw/UpToDate", component: UpToDate };

export default meta;
type Story = StoryObj<typeof UpToDate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
