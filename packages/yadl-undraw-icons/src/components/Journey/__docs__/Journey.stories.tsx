import type { Meta, StoryObj } from "@storybook/react";
import Journey from "../Journey";

const meta: Meta<typeof Journey> = { title: "unDraw/Journey", component: Journey };

export default meta;
type Story = StoryObj<typeof Journey>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
