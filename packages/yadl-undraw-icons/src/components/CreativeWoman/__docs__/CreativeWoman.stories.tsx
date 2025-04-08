import type { Meta, StoryObj } from "@storybook/react";
import CreativeWoman from "../CreativeWoman";

const meta: Meta<typeof CreativeWoman> = { title: "unDraw/CreativeWoman", component: CreativeWoman };

export default meta;
type Story = StoryObj<typeof CreativeWoman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
