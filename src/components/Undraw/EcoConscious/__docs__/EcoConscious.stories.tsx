import type { Meta, StoryObj } from "@storybook/react";
import EcoConscious from "../EcoConscious";

const meta: Meta<typeof EcoConscious> = { title: "unDraw/EcoConscious", component: EcoConscious };

export default meta;
type Story = StoryObj<typeof EcoConscious>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
