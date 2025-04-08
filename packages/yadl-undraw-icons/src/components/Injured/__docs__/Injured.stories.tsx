import type { Meta, StoryObj } from "@storybook/react";
import Injured from "../Injured";

const meta: Meta<typeof Injured> = { title: "unDraw/Injured", component: Injured };

export default meta;
type Story = StoryObj<typeof Injured>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
