import type { Meta, StoryObj } from "@storybook/react";
import DollPlayDollPlay from "../DollPlayDollPlay";

const meta: Meta<typeof DollPlayDollPlay> = { title: "unDraw/DollPlayDollPlay", component: DollPlayDollPlay };

export default meta;
type Story = StoryObj<typeof DollPlayDollPlay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
