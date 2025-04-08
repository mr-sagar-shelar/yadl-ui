import type { Meta, StoryObj } from "@storybook/react";
import FallFall from "../FallFall";

const meta: Meta<typeof FallFall> = { title: "unDraw/FallFall", component: FallFall };

export default meta;
type Story = StoryObj<typeof FallFall>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
