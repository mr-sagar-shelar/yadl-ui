import type { Meta, StoryObj } from "@storybook/react";
import ComingHome from "../ComingHome";

const meta: Meta<typeof ComingHome> = { title: "unDraw/ComingHome", component: ComingHome };

export default meta;
type Story = StoryObj<typeof ComingHome>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
