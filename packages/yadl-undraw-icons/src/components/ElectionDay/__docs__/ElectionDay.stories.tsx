import type { Meta, StoryObj } from "@storybook/react";
import ElectionDay from "../ElectionDay";

const meta: Meta<typeof ElectionDay> = { title: "unDraw/ElectionDay", component: ElectionDay };

export default meta;
type Story = StoryObj<typeof ElectionDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
