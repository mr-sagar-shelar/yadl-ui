import type { Meta, StoryObj } from "@storybook/react";
import GatsbyJs from "../GatsbyJs";

const meta: Meta<typeof GatsbyJs> = { title: "unDraw/GatsbyJs", component: GatsbyJs };

export default meta;
type Story = StoryObj<typeof GatsbyJs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
