import type { Meta, StoryObj } from "@storybook/react";
import Wedding from "../Wedding";

const meta: Meta<typeof Wedding> = { title: "unDraw/Wedding", component: Wedding };

export default meta;
type Story = StoryObj<typeof Wedding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
