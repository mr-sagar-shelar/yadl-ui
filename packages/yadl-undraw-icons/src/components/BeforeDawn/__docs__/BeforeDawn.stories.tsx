import type { Meta, StoryObj } from "@storybook/react";
import BeforeDawn from "../BeforeDawn";

const meta: Meta<typeof BeforeDawn> = { title: "unDraw/BeforeDawn", component: BeforeDawn };

export default meta;
type Story = StoryObj<typeof BeforeDawn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
