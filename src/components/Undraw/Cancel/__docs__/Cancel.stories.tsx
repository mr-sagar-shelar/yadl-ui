import type { Meta, StoryObj } from "@storybook/react";
import Cancel from "../Cancel";

const meta: Meta<typeof Cancel> = { title: "unDraw/Cancel", component: Cancel };

export default meta;
type Story = StoryObj<typeof Cancel>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
