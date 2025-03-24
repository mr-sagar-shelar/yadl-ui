import type { Meta, StoryObj } from "@storybook/react";
import Applications from "../Applications";

const meta: Meta<typeof Applications> = { title: "unDraw/Applications", component: Applications };

export default meta;
type Story = StoryObj<typeof Applications>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
