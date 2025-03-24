import type { Meta, StoryObj } from "@storybook/react";
import Party from "../Party";

const meta: Meta<typeof Party> = { title: "unDraw/Party", component: Party };

export default meta;
type Story = StoryObj<typeof Party>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
