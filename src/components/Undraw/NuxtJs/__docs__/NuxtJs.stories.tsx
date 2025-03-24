import type { Meta, StoryObj } from "@storybook/react";
import NuxtJs from "../NuxtJs";

const meta: Meta<typeof NuxtJs> = { title: "unDraw/NuxtJs", component: NuxtJs };

export default meta;
type Story = StoryObj<typeof NuxtJs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
