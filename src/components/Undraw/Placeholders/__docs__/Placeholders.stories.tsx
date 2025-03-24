import type { Meta, StoryObj } from "@storybook/react";
import Placeholders from "../Placeholders";

const meta: Meta<typeof Placeholders> = { title: "unDraw/Placeholders", component: Placeholders };

export default meta;
type Story = StoryObj<typeof Placeholders>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
