import type { Meta, StoryObj } from "@storybook/react";
import Ideas from "../Ideas";

const meta: Meta<typeof Ideas> = { title: "unDraw/Ideas", component: Ideas };

export default meta;
type Story = StoryObj<typeof Ideas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
