import type { Meta, StoryObj } from "@storybook/react";
import SuperWomanSuperWoman from "../SuperWomanSuperWoman";

const meta: Meta<typeof SuperWomanSuperWoman> = { title: "unDraw/SuperWomanSuperWoman", component: SuperWomanSuperWoman };

export default meta;
type Story = StoryObj<typeof SuperWomanSuperWoman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
